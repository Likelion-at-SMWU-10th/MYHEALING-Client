import React from "react";
import styled from "styled-components";
import AddressBtn from "./AddressBtn";

/*포커스기능주기*/
const WriteGuide = () => {
  return (
    //   function counter() {
    //     var content = document.getElementById('jasoseol').value;
    //   if (content.length > 200) {
    //     content = content.substring(0,200);
    //     document.getElementById('jasoseol').value = content;
    // }
    //     document.getElementById('count').innerHTML = '(' + content.length + '/200)';
    // }
    <Container>
      <Wrapper>
        <MainTitle>가이드 작성하기</MainTitle>
        <Box>
          <AddressBtn />
          <Title>
            <SubTitle>제목 : </SubTitle>
            <ContentTitle className="titleC" type="text"></ContentTitle>
          </Title>
          <Date>
            <Sub>날짜</Sub>
            <ContentDate className="titleC" type="text"></ContentDate>
          </Date>
          <Place>
            <Sub>방문한 장소명</Sub>
            <ContentPlace className="titleC" type="text"></ContentPlace>
          </Place>
          <Expense>
            <Sub>지출 금액</Sub>
            <ContentNum
              className="titleC"
              type="number"
              placeholder="숫자로 작성"
            ></ContentNum>
          </Expense>
          <MainText>
            <SubText>본문</SubText>
            <ContentText
              className="titleC"
              type="text"
              placeholder="최대 @@@자"
              rows="6"
            ></ContentText>
          </MainText>
          <Photo>
            <SubPhoto className="titleC" type="file" accept="image/*">
              사진 첨부
            </SubPhoto>
            <InputPhoto></InputPhoto>
          </Photo>
          <SelectTag>태그 선택하기</SelectTag>
        </Box>
        <BottomBtn>
          <CancelBtn>취소하기</CancelBtn>
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
  height: 40rem;
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
const ContentText = styled.textarea`
  border: none;
  margin: 0.4rem auto 2rem 0rem;
  resize: none;
  width: 80%;
`;
const Photo = styled.div``;
const SubPhoto = styled.button``;
const InputPhoto = styled.input`
  display: none;
`;
const SelectTag = styled.div``;
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
`;

export default WriteGuide;
