import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

//const apiUrl = "http://127.0.0.1:8000/";
const apiUrl = "http://15.164.98.6:8080/";
const instance = axios.create({
  // baseURL:
  baseURL: `${apiUrl}`,
  // 요청시에 추가적으로 앞에 붙는 기본 URL 설정
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = cookies.get("access_token");
    // const accessToken = retrieveUserToken('access'); // access 토큰을 가져오는 함수
    if (accessToken) {
      config.headers["Authorization"] = "Bearer " + accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const { response: errorResponse } = error;
    const originalRequest = error.config;

    console.log("error");
    console.log(error);
    // 인증 에러 발생시
    if (errorResponse.status === 401) {
      return await resetTokenAndReattemptRequest(error);
    }

    return Promise.reject(error);
  }
);

let isAlreadyFetchingAccessToken = false;
let subscribers = [];

async function resetTokenAndReattemptRequest(error) {
  try {
    const { response: errorResponse } = error;
    console.log("1");

    // subscribers에 access token을 받은 이후 재요청할 함수 추가 (401로 실패했던)
    // retryOriginalRequest는 pending 상태로 있다가
    // access token을 받은 이후 onAccessTokenFetched가 호출될 때
    // access token을 넘겨 다시 axios로 요청하고
    // 결과값을 처음 요청했던 promise의 resolve로 settle시킨다.
    const retryOriginalRequest = new Promise((resolve, reject) => {
      addSubscriber(async (accessToken) => {
        try {
          console.log("4" + accessToken);
          errorResponse.config.headers["Authorization"] =
            "Bearer " + accessToken;
          resolve(instance(errorResponse.config));
        } catch (err) {
          reject(err);
        }
      });
    });
    console.log("3");

    // refresh token을 이용해서 access token 요청
    if (!isAlreadyFetchingAccessToken) {
      console.log("5");

      isAlreadyFetchingAccessToken = true; // 문닫기 (한 번만 요청)

      console.log("5.5");
      postRefresh();
      //   storeUserToken('access', data.access);
      //   storeUserToken('refresh', data.refresh);
    }
    console.log("1111");
    return retryOriginalRequest; // pending 됐다가 onAccessTokenFetched가 호출될 때 resolve
  } catch (error) {
    //  signOut();
    return Promise.reject(error);
  }
}

function postRefresh() {
  console.log("postR");
  const config = {
    header: { "content-Type": "multipart/form-data" },
  };

  let formData = new FormData();
  formData.append("refresh", cookies.get("refresh_token"));
  axios
    .post(`${apiUrl}login/refresh/`, formData, config)
    .then(function (response) {
      // response
      console.log("get");
      console.log(response.data.access);
      cookies.set("access_token", response.data.access, {
        path: "/",
      });

      isAlreadyFetchingAccessToken = false; // 문열기 (초기화)
      onAccessTokenFetched(cookies.get("access_token"));
    })
    .catch(function (error) {
      console.log(error);
      // 오류발생시 실행
    })
    .then(function () {
      // 항상 실행
    });
}

function addSubscriber(callback) {
  subscribers.push(callback);
}

function onAccessTokenFetched(accessToken) {
  console.log("onAccessTokenFetched" + subscribers);
  subscribers.forEach((callback) => callback(accessToken));
  subscribers = [];
}

export default instance;
