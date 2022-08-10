import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";

const PostPage = () => {
  return (
    <Wrapper>
      <Box>
        <Arrow>
          <BsArrowLeft size="27" />
        </Arrow>
        <AddressDiv>주소</AddressDiv>
        <LockImg src={"/img/lock.svg"} />
        <Title>
          <SubTitle>제목 : </SubTitle>
          <ContentTitle></ContentTitle>
        </Title>
        <Date>
          <Sub>날짜</Sub>
          <ContentDate></ContentDate>
        </Date>
        <Place>
          <Sub>방문한 장소명</Sub>
          <ContentPlace></ContentPlace>
        </Place>
        <MainText>
          <SubText>본문</SubText>
          <ContentWrapper>
            <PhotoList></PhotoList>
            <ContentText></ContentText>
          </ContentWrapper>
        </MainText>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const Arrow = styled.div`
  position: absolute;
  top: 0rem;
  left: -4rem;

  & svg {
    color: gray;
    cursor: pointer;
  }
`;

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 40rem;
  height: auto;
  margin: 5rem auto 5rem auto;
  border: 1px solid;
  padding: 1rem;
  text-align: left;
  box-shadow: 0.3rem 0.3rem 0.3rem 0 #bdbdbd;
`;

const LockImg = styled.img`
  width: 2rem;
  margin: -1rem auto auto 35.4rem;
`;

const AddressDiv = styled.div`
  font-size: 0.8rem;
  margin: 0.4rem auto 0rem 2rem;
  width: 80.5%;
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

const PhotoList = styled.div``;
const ContentText = styled.textarea`
  outline-style: none;
  border: none;
  margin: 0.4rem auto 0rem 0rem;
  resize: none;
  width: 100%;
`;

export default PostPage;
