import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Address from "./Address";
import UploadPhoto from "./UploadPhoto";
import Swal from "sweetalert2";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const WriteMemories = ({ apiUrl }) => {
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
      } else {
      }
    });
  };

  //api 연결
  const [inputs, setInputs] = useState({
    date: "",
    place: "",
    title: "",
    body: "",
    address: "",
    image: "",
  });

  //onChange 함수 만들어주기
  const changeInput = (e) => {
    const newInputs = { ...inputs };
    newInputs[e.target.name] = e.target.value;
    setInputs(newInputs);
    console.log(newInputs);
  };

  const navigate = useNavigate();
  const access = cookies.get("access_token");

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

    axios
      .post(
        `${apiUrl}memory/`,

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
        <MainTitle>오늘의 추억 남기기</MainTitle>
        <Box>
          <Address
            name="address"
            value={inputs.address}
            onChange={changeInput}
            getAd={getAd}
          />
          <LockImg src={"/img/lock.svg"} />
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
          <UploadPhoto
            getPh={getPh}
            getdPh={getdPh}
            name="image"
            value={inputs.image}
            onChange={changeInput}
          ></UploadPhoto>
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

const LockImg = styled.img`
  width: 2rem;
  margin: -1rem auto auto 35.4rem;
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

export default WriteMemories;
