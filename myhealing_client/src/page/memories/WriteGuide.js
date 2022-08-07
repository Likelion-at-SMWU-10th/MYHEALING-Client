import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Address from "./Address";
import UploadPhoto from "./UploadPhoto";
import TagModal from "./TagModal";
import KeywordGroup from "./KeywordGroup";
import { HiOutlineHashtag } from "react-icons/hi";

/*포커스기능주기*/

const WriteGuide = () => {
  //태그
  const [tags, setTags] = useState([]);
  const getTag = (gtags) => {
    setTags([...tags, gtags]);
  };

  const navigate = useNavigate();
  // <ContentText> 글자수 제한
  const [count, setCount] = useState("");
  const onInput = (e) => {
    const maxLength = 500;
    if (e.target.value.length > maxLength) {
      e.target.value = e.target.value.substr(0, maxLength);
    }
    setCount(e.target.value.length);
  };
  // 사진 첨부
  const [imageSrc, setImageSrc] = useState([]);

  // 모달창
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <Container>
      <Wrapper>
        <MainTitle>가이드 작성하기</MainTitle>
        <Box>
          <Address />
          <Title>
            <SubTitle>제목 : </SubTitle>
            <ContentTitle type="text"></ContentTitle>
          </Title>
          <Date>
            <Sub>날짜</Sub>
            <ContentDate type="text"></ContentDate>
          </Date>
          <Place>
            <Sub>방문한 장소명</Sub>
            <ContentPlace type="text"></ContentPlace>
          </Place>
          <Expense>
            <Sub>지출 금액</Sub>
            <ContentNum type="number" placeholder="숫자로 작성"></ContentNum>
          </Expense>
          <MainText>
            <SubText>본문</SubText>
            <ContentWrapper>
              <ContentText
                type="text"
                placeholder="최대 500자"
                rows="6"
                onInput={onInput}
              ></ContentText>
              <Counter>({count === "" ? 0 : count}/500)</Counter>
            </ContentWrapper>
          </MainText>
          <UploadPhoto setImages={setImageSrc}></UploadPhoto>
          <SelectTag>
            <Sub>
              <TagDiv>
                <HiOutlineHashtag size="19" color="#73bd88" />
                <TagBtn onClick={openModal}>태그 선택</TagBtn>
              </TagDiv>
              <TagModal
                open={modalOpen}
                close={closeModal}
                header="키워드로 맞춤 장소 찾기"
              >
                <KeywordGroup tags={tags} getTag={getTag} />
              </TagModal>
            </Sub>
            <Tags>{tags}</Tags>
          </SelectTag>
        </Box>
        <BottomBtn>
          <CancelBtn onClick={() => navigate(-1)}>취소하기</CancelBtn>
          <SubmitBtn>저장하기</SubmitBtn>
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

const TagBtn = styled.button`
  background-color: #ffffff;
  border: none;
  color: #73bd88;
  border-radius: 0.5rem;
  margin-left: 5px;
`;

const Tags = styled.div`
  margin-top: 0.6rem;
  margin-left: 1rem;
  border: 1px solid black;
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

export default WriteGuide;
