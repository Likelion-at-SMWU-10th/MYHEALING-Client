import React from "react";
import styled from "styled-components";
import { HiOutlineHashtag } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { BsArrowLeft, BsShare, BsHeart } from "react-icons/bs";

const PostPage = () => {
  return (
    <Wrapper>
      <Box>
        <Arrow>
          <BsArrowLeft size="27" />
        </Arrow>
        <LeftDiv>
          <ShareDiv>
            <BsShare size="27" />
            <ShareCount>{0}</ShareCount>
          </ShareDiv>
          <HeartDiv>
            <BsHeart size="27" />
            <HeartCount>{0}</HeartCount>
          </HeartDiv>
        </LeftDiv>
        <AddressDiv>주소</AddressDiv>
        <Star>
          <StarDiv>
            <FaStar />
          </StarDiv>
        </Star>
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
        <Expense>
          <Sub>지출 금액</Sub>
          <ContentNum></ContentNum>
        </Expense>
        <MainText>
          <SubText>본문</SubText>
          <ContentWrapper>
            <PhotoList></PhotoList>
            <ContentText></ContentText>
          </ContentWrapper>
        </MainText>
        <SelectTag>
          <Sub>
            <TagDiv>
              <HiOutlineHashtag size="19" color="#73bd88" />
            </TagDiv>
          </Sub>
          <Tags></Tags>
        </SelectTag>
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

const LeftDiv = styled.div`
  position: absolute;
  right: 2rem;
  top: 1.4rem;
  display: flex;
  flex-direction: row;
`;

const ShareDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 0.7rem;

  & svg {
    cursor: pointer;
  }

  :hover svg {
    color: #73bd88;
  }
`;

const ShareCount = styled.div``;

const HeartDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  & svg {
    cursor: pointer;
  }

  :hover svg {
    color: #73bd88;
  }
`;

const HeartCount = styled.div``;

const Star = styled.div`
  display: flex;
  flex-direction: row;
  width: 38rem;
`;

const StarDiv = styled.div`
  display: flex;
  padding: 10px 0;
  margin-left: 2rem;

  & svg {
    color: #d9d9d9;
    cursor: pointer;
  }

  :hover svg {
    color: #73bd88;
  }

  & svg:hover ~ svg {
    color: #d9d9d9;
  }

  .greenStar {
    color: #73bd88;
  }
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
const Expense = styled.div`
  display: flex;
  flex-direction: row;
  width: 40rem;
`;
const ContentNum = styled.input`
  outline-style: none;
  border: none;
  margin: 0.44rem auto 2rem 0rem;
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

const SelectTag = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`;

const TagDiv = styled.div`
  &:hover {
  }
  &:active {
    padding-left: 10px;
  }
`;

const Tags = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1.6rem;
  flex-wrap: wrap;
`;

export default PostPage;
