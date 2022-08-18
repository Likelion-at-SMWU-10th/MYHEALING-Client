//Kakao.js
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Kakao = ({ apiUrl }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];
  console.log(KAKAO_CODE);

  useEffect(() => {
    axios
      .get(`${apiUrl}accounts/kakao/accesstoken/${KAKAO_CODE}`)
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", res.data.user);
        localStorage.setItem("profile_photo", res.data.profile_photo);
        cookies.set("access_token", res.data.token.access, {
          path: "/",
        });
        cookies.set("refresh_token", res.data.token.refresh, {
          path: "/",
        });
        window.location.replace("/");
      });
  });

  // useEffect(() => {
  //   fetch(`${API.KAKAO_LOGIN}?code=${KAKAO_CODE}`, {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       localStorage.setItem("token", data.token);
  //       navigate("/");
  //     });
  // }, [KAKAO_CODE, navigate]);

  return <div>잠시만 기다려 주세요! 로그인 중입니다.</div>;
};

export default Kakao;
