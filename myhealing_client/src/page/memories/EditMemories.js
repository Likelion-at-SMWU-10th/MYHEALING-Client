import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Address from "./Address";
import UploadPhoto from "./UploadPhoto";
import axios from "axios";
import Cookies from "universal-cookie";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/zoom/zoom.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Swal from "sweetalert2";
import instance from "../login/instance";

SwiperCore.use([Navigation, Pagination]);
const cookies = new Cookies();

/*포커스기능주기*/

const EditMemories = ({ apiUrl }) => {
  const Params = useParams();

  const photoAlert = () => {
    setTimeout(() => {
      Swal.fire({
        title: "사진을 다시 올리시겠습니까?",
        text: "확인을 누르면 기존 사진은 초기화됩니다.",
        icon: "warning",
        showCancelButton: false,
        confirmButtonColor: "#73bd88",
        confirmButtonText: "확인",
        cancelButtonText: "취소",
      }).then((result) => {
        if (result.isConfirmed) {
          inputs.fileChange = true;
          console.log(inputs.fileChange);
        } else {
          console.log(inputs.fileChange);
          console.log(inputs.image);
        }
      });
    }, 2000);
  };

  const [inputs, setInputs] = useState({
    date: "",
    place: "",
    title: "",
    body: "",
    address: "",
    image: "",
    fileChange: false,
  });

  //onChange 함수 만들어주기
  const changeInput = (e) => {
    const newInputs = { ...inputs };
    newInputs[e.target.name] = e.target.value;
    setInputs(newInputs);
    console.log(newInputs);
  };
  const [ima, setIma] = useState([]);

  // 게시글 조회 api
  useEffect(() => {
    instance
      .get(`${apiUrl}memory/${Params.memoryID}`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((response) => {
        console.log(response);
        setInputs({
          address: response.data.address,
          title: response.data.title,
          date: response.data.date,
          place: response.data.place,
          body: response.data.body,
          image: response.data.images,
        });
        setIma(() => {
          return response.data.images;
        });
        console.log(ima);
        console.log(inputs.tag);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log(ima);
  }, [ima]);

  const navigate = useNavigate();
  const access = cookies.get("access_token");

  const submitAlert = () => {
    Swal.fire({
      title: "저장하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#73bd88",
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        onSubmit();
        navigate(`/postMemories/${Params.memoryID}`);
      } else {
      }
    });
  };

  const onSubmit = (e) => {
    let formData = new FormData();
    const config = {
      headers: {
        "content-Type": "multipart/form-data",
        Authorization: `Bearer ${access}`,
      },
    };
    formData.append("date", inputs.date);
    formData.append("place", inputs.place);
    formData.append("title", inputs.title);
    formData.append("body", inputs.body);
    formData.append("address", inputs.address);

    if (inputs.fileChange) {
      formData.append("file_change", inputs.fileChange);
    }
    for (let i = 0; i < inputs.image.length; i++) {
      formData.append("image", inputs.image[i]);
    }
    // FormData의 key 확인
    for (let key of formData.keys()) {
      console.log(key);
    }

    // FormData의 value 확인
    for (let value of formData.values()) {
      console.log(value);
    }
    instance
      .put(
        `${apiUrl}memory/${Params.memoryID}`,

        formData,

        config
      )
      .then((res) => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // 주소
  const [ad, setAd] = useState("");
  const getAd = (gad) => {
    setAd(gad);
    inputs.address = gad;
  };

  // 사진

  const [ph, setPh] = useState([]);
  const getPh = (gph) => {
    setPh([...ph, gph]);
    inputs.image = gph;
    console.log(inputs.image);
  };

  const getdPh = (gph) => {
    setPh([gph]);
    inputs.image = gph;
    console.log(inputs.image);
  };

  // <ContentText> 글자수 제한
  const [count, setCount] = useState("");
  const onInput = (e) => {
    const maxLength = 500;
    if (e.target.value.length > maxLength) {
      e.target.value = e.target.value.substr(0, maxLength);
    }
    setCount(e.target.value.length);
  };

  return (
    <Container>
      <Wrapper>
        <MainTitle>추억 수정하기</MainTitle>
        <Box>
          <Address
            name="address"
            value={inputs.address}
            onChange={changeInput}
            getAd={getAd}
          />
          <Title>
            <SubTitle>제목 : </SubTitle>
            <ContentTitle
              type="text"
              name="title"
              value={inputs.title}
              onChange={changeInput}
            ></ContentTitle>
          </Title>
          <Date>
            <Sub>날짜</Sub>
            <ContentDate
              type="text"
              name="date"
              placeholder="0000-00-00"
              value={inputs.date}
              onChange={changeInput}
            ></ContentDate>
          </Date>
          <Place>
            <Sub>방문한 장소명</Sub>
            <ContentPlace
              type="text"
              name="place"
              value={inputs.place}
              onChange={changeInput}
            ></ContentPlace>
          </Place>
          <MainText>
            <SubText>본문</SubText>
            <ContentWrapper>
              <ContentText
                type="text"
                placeholder="최대 500자"
                rows="6"
                onInput={onInput}
                name="body"
                value={inputs.body}
                onChange={changeInput}
              ></ContentText>
              <Counter>({count === "" ? 0 : count}/500)</Counter>
            </ContentWrapper>
          </MainText>
          <PhotoList>
            <SwiperImg
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              {ima &&
                ima.map((i) => {
                  return (
                    <SwiperSlide key={i.id}>
                      <ImgContainer>
                        <ImgDiv>
                          <ImageList
                            src={`http://15.164.98.6:8080${i.image}`}
                            key={i.id}
                          ></ImageList>
                        </ImgDiv>
                      </ImgContainer>
                    </SwiperSlide>
                  );
                })}
            </SwiperImg>
          </PhotoList>
          <PhDiv>
            <UploadPhoto
              getPh={getPh}
              getdPh={getdPh}
              name="image"
              value={inputs.image}
              onChange={changeInput}
              sendImage={ima}
              onClick={photoAlert}
            ></UploadPhoto>
          </PhDiv>
        </Box>
        <BottomBtn>
          <CancelBtn onClick={() => navigate(-1)}>취소하기</CancelBtn>
          <SubmitBtn onClick={submitAlert}>저장하기</SubmitBtn>
        </BottomBtn>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const MainTitle = styled.div`
  line-height: 5rem;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  height: auto;
  margin: 0 auto 0 auto;
  border: 1px solid;
  padding: 1rem;
  text-align: left;
  box-shadow: 0.3rem 0.3rem 0.3rem 0 #bdbdbd;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  width: 38rem;
`;

const SubTitle = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0.5rem 0.5rem 2rem 2rem;
`;
const ContentTitle = styled.textarea`
  outline-style: none;
  border: none;
  font-size: 1.4rem;
  margin: 0.4rem auto 2rem 0rem;
  width: 80.5%;
  resize: none;
`;

const Date = styled.div`
  display: flex;
  flex-direction: row;
  width: 40rem;
`;
const Sub = styled.div`
  margin: 0.5rem 0.5rem 2rem 2rem;
`;
const ContentDate = styled.input`
  border: none;
  outline-style: none;
  margin: 0.44rem auto 2rem 0rem;
  width: 80%;
`;
const Place = styled.div`
  display: flex;
  flex-direction: row;
  width: 80rem;
`;

const ContentPlace = styled.input`
  border: none;
  outline-style: none;
  margin: 0.433rem auto 2rem 0rem;
  width: 35.4%;
`;

const MainText = styled.div`
  display: flex;
  flex-direction: row;
  width: 40rem;
`;

const PhotoList = styled.div`
  width: 80%;
  margin: 0rem auto 0 auto;
  & .swiper-button-prev {
    display: none;
  }

  & .swiper-button-next {
    display: none;
  }
  & .swiper-pagination {
  }

  & .swiper-pagination-bullet {
    background-color: #73bd88;
    margin: 0 5px !important;
  }
`;

const SwiperImg = styled(Swiper)`
  width: auto;
  height: 14rem;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const ImgDiv = styled.div`
  width: auto;
  height: 85%;
`;

const ImageList = styled.img`
  width: 100%;
  height: 100%;
`;

const PhDiv = styled.div``;

const SubText = styled.div`
  margin: 0.5rem 0.5rem 0rem 2rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-content: space-between;
`;
const ContentText = styled.textarea`
  outline-style: none;
  border: none;
  margin: 0.4rem auto 0rem 0rem;
  resize: none;
  width: 100%;
`;

const Counter = styled.div`
  text-align: right;
  color: #73bd88;
`;

const BottomBtn = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: auto;
  justify-content: center;
  align-content: center;
  width: 50%;
  height: 4rem;
  flex-wrap: wrap;
  margin: 1rem auto 1rem auto;
`;
const CancelBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 1.7rem;
  text-align: center;
  border: 1px solid #73bd88;
  border-radius: 0.5rem;
  background-color: #ffffff;
  font-family: "NotoSansKR";
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 500;
  color: #73bd88;
  box-shadow: 0 0.3rem 0.3rem 0 #bdbdbd;
  padding-top: 0.8vh;
  margin-right: 0.2rem;

  &:hover {
    background-color: #73bd88;
    color: #ffffff;
  }
`;
const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 1.7rem;
  text-align: center;
  border: 1px solid #73bd88;
  border-radius: 0.5rem;
  background-color: #ffffff;
  font-family: "NotoSansKR";
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 500;
  color: #73bd88;
  box-shadow: 0 0.3rem 0.3rem 0 #bdbdbd;
  padding-top: 0.8vh;
  margin-left: 0.2rem;

  &:hover {
    background-color: #73bd88;
    color: #ffffff;
  }
`;

export default EditMemories;
