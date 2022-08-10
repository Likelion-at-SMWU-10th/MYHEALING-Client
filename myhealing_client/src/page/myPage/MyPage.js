import React from "react";
import styled from "styled-components";

const MyPage = () => {
  return (
    <Wrapper>
      <MeDiv>
        <MeImg src="img/search/me.svg"></MeImg>
        <MyName>감자</MyName>
      </MeDiv>
      <ListDiv>
        <HeartList className="col">
          <HeartSub>내가 찜한 리스트</HeartSub>
          <HeartContent>안녕</HeartContent>
        </HeartList>
        <MyGuide className="col">
          <GuideSub>내가 작성한 가이드</GuideSub>
          <GuideContent>{}</GuideContent>
        </MyGuide>
        <MyMem className="col">
          <MemSub>내가 남긴 추억</MemSub>
          <MemContent></MemContent>
        </MyMem>
      </ListDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const MeDiv = styled.div`
  background-color: rgba(217, 217, 217, 0.3);
  padding: 4rem 0 2rem 0;
  text-align: center;
`;
const MeImg = styled.img`
  width: 85px;
  margin-bottom: 1rem;
`;
const MyName = styled.div`
  font-size: 26px;
`;
const ListDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const HeartList = styled.div`
  color: rgba(0, 0, 0, 0.6);
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
const HeartSub = styled.div`
  font-weight: 700;
  font-size: 1.3rem;
  margin-bottom: 2rem;
`;
const HeartContent = styled.div`
  line-height: 3vh;
  color: rgba(0, 0, 0, 0.8);
  font-size: 1rem;
  font-weight: 500;
`;
const MyGuide = styled.div`
  color: rgba(0, 0, 0, 0.6);
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
const GuideContent = styled.div`
  line-height: 3vh;
  color: rgba(0, 0, 0, 0.8);
  font-size: 1rem;
  font-weight: 500;
`;
const MyMem = styled.div`
  color: rgba(0, 0, 0, 0.6);
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
const MemContent = styled.div`
  line-height: 3vh;
  color: rgba(0, 0, 0, 0.8);
  font-size: 1rem;
  font-weight: 500;
`;

export default MyPage;
