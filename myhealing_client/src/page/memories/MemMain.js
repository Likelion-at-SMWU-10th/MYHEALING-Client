import React from "react";
import styled from "styled-components";

const MemMain = () => {
  return (
    <Container>
      <TopWrapper>
        <RandomGuide>
          <RandomTitle>랜덤 가이드 작성하기</RandomTitle>
          <RandomList>
            비 오는 날에 어울리는 카페 <br />
            어색한 친구랑도 짱친이 될 수 있는 장소
            <br />
            나만 알고 싶은 술집 <br />
            혼자 있고 싶을 때 가기 좋은 장소
          </RandomList>
        </RandomGuide>
        <TodayMemories>
          <TodayTitle>오늘의 추억 남기기</TodayTitle>
          <TodayContent></TodayContent>
        </TodayMemories>
      </TopWrapper>
      <BottomWrapper>
        <LeafImg src={"/img/leaf.png"} />
        <GuideBtn>가이드 작성하기</GuideBtn>
      </BottomWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 1000px;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  width: 100%;
  height: 75%;
`;

const RandomGuide = styled.div`
  display: flex;
  flex-direction: column;
  width: 80rem;
  height: 17rem;
  border: 1px solid;
  padding: 4rem;
  margin: 10rem 2rem 5rem 8rem;
  text-align: left;
  box-shadow: 0 0.3rem 0.3rem 0 #bdbdbd;
`;

const RandomTitle = styled.h5`
  border-width: 1rem;
`;

const RandomList = styled.div``;

const TodayMemories = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80rem;
  height: 17rem;
  border: 1px solid;
  padding: 4rem;
  margin: 10rem 8rem 5rem 2rem;
  text-align: left;
  box-shadow: 0 0.3rem 0.3rem 0 #bdbdbd;
`;

const TodayTitle = styled.h5`
  border-width: 1rem;
`;
const TodayContent = styled.div``;

const BottomWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 25%;
`;

const LeafImg = styled.img`
  height: 8vmin;
  float: left;
  white-space: nowrap;
  overflow: hidden;
`;

const GuideBtn = styled.button`
  position: relative;
  width: 10rem;
  height: 3rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #73bd88;
  font-family: "NotoSansKR";
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 600;
  color: #ffffff;
  box-shadow: 0 0.3rem 0.3rem 0 #bdbdbd;
  padding-top: 0.8vh;
  margin-right: 2vw;
  margin-left: 2vw;
`;

export default MemMain;
