import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MyPage = ({ apiUrl }) => {
  const user = localStorage.getItem("user");
  const nickname = localStorage.getItem("nickname");
  const introduce = localStorage.getItem("introduce");
  const profile_photo = localStorage.getItem("profile_photo");
  const ourlogin_ph = localStorage.getItem("ourlogin_ph");

  //

  const navigate = useNavigate();
  return (
    <Wrapper>
      <MeDiv>
        {ourlogin_ph ? (
          <div>
            {ourlogin_ph ? (
              ourlogin_ph == "null" ? (
                <MeImg src="img/search/me.svg"></MeImg>
              ) : (
                <MeImg src={`http://15.164.98.6:8080${ourlogin_ph}`}></MeImg>
              )
            ) : (
              <MeImg src="img/search/me.svg"></MeImg>
            )}
          </div>
        ) : (
          <div>
            {profile_photo ? (
              profile_photo == "null" ? (
                <MeImg src="img/search/me.svg"></MeImg>
              ) : (
                <MeImg src={profile_photo}></MeImg>
              )
            ) : (
              <MeImg src="img/search/me.svg"></MeImg>
            )}
          </div>
        )}

        {nickname ? <MyName>{nickname}</MyName> : <MyName>{user}</MyName>}
        {introduce ? <AboutMe>{introduce}</AboutMe> : null}
      </MeDiv>
      <ListDiv>
        <HeartList
          onClick={() => {
            navigate("/mylove");
          }}
        >
          <HeartSub>내가 찜한 가이드</HeartSub>
        </HeartList>
        <MyGuide
          onClick={() => {
            navigate("/myguide");
          }}
        >
          <GuideSub>내가 작성한 가이드</GuideSub>
        </MyGuide>
        <MyMem
          onClick={() => {
            navigate("/mymemories");
          }}
        >
          <MemSub>내가 남긴 추억</MemSub>
        </MyMem>
      </ListDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const MeDiv = styled.div`
  background-color: rgba(217, 217, 217, 0.3);
  padding: 2rem 0 2rem 0;
  text-align: center;
`;
const MeImg = styled.img`
  width: 85px;
  height: 85px;
  margin-bottom: 1rem;
  border-radius: 100%;
`;
const MyName = styled.div`
  font-size: 26px;
`;
const AboutMe = styled.div`
  font-size: 15px;
`;
const ListDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const HeartList = styled.div`
  color: rgba(0, 0, 0, 0.8);
  width: 80rem;
  height: 17rem;
  border: 1px solid #bdbdbd;
  padding: 3rem;
  text-align: left;
  box-shadow: 0.3rem 0.3rem 0.3rem 0 rgba(208, 208, 208, 0.6);
  margin: 4rem 1.5rem;
`;
const HeartSub = styled.div`
  font-weight: 700;
  font-size: 1.3rem;
  margin-bottom: 2rem;
`;
const MyGuide = styled.div`
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  width: 80rem;
  height: 17rem;
  border: 1px solid #bdbdbd;
  padding: 3rem;
  text-align: left;
  box-shadow: 0.3rem 0.3rem 0.3rem 0 rgba(208, 208, 208, 0.6);
  margin: 4rem 1.5rem;
`;
const GuideSub = styled.div`
  font-weight: 700;
  font-size: 1.3rem;
  margin-bottom: 2rem;
`;
const MyMem = styled.div`
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  width: 80rem;
  height: 17rem;
  border: 1px solid #bdbdbd;
  padding: 3rem;
  text-align: left;
  box-shadow: 0.3rem 0.3rem 0.3rem 0 rgba(208, 208, 208, 0.6);
  margin: 4rem 1.5rem;
`;
const MemSub = styled.div`
  font-weight: 700;
  font-size: 1.3rem;
  margin-bottom: 2rem;
`;

export default MyPage;
