import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MemMain = () => {
  const navigate = useNavigate();
  const GoRandom = () => {
    navigate("/writerandom");
  };
  const GoToday = () => {
    navigate("/writetoday");
  };
  const GoGuide = () => {
    navigate("/writeguide");
  };

  return (
    <Container>
      <Wrapper>
        <TopWrapper>
          <RandomGuide onClick={GoRandom}>
            <RandomTitle>랜덤 가이드 작성하기</RandomTitle>
            <RandomList>
              비 오는 날에 어울리는 카페 <br />
              어색한 친구랑도 짱친이 될 수 있는 장소
              <br />
              나만 알고 싶은 술집 <br />
              혼자 있고 싶을 때 가기 좋은 장소
            </RandomList>
          </RandomGuide>
          <TodayMemories onClick={GoToday}>
            <TodayTitle>오늘의 추억 남기기</TodayTitle>
            <TodayContent>
              <br />
              추억 남기기 기능을 통해
              <br />
              본인이 방문한 장소의 후기 뿐만 아니라,
              <br />
              일기처럼 하루를 기록하세요!
            </TodayContent>
          </TodayMemories>
        </TopWrapper>
        <BottomWrapper>
          <LeafImg src={"/img/leaf.png"} />
          <GuideBtn onClick={GoGuide}>가이드 작성하기</GuideBtn>
        </BottomWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 145vmin;
  min-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 75%;
`;

const RandomGuide = styled.div`
  display: flex;
  flex-direction: column;
  width: 80rem;
  height: 17rem;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 3rem;
  margin: 10rem 2rem 5rem 8rem;
  text-align: left;
  box-shadow: 0.3rem 0.3rem 0.3rem 0 #bdbdbd;
`;

const RandomTitle = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  padding-bottom: 3vh;
  overflow: hidden;
`;

const RandomList = styled.div`
  line-height: 3vh;
`;

const TodayMemories = styled.div`
  display: flex;
  flex-direction: column;
  width: 80rem;
  height: 17rem;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 3rem;
  margin: 10rem 8rem 5rem 2rem;
  text-align: left;
  box-shadow: 0.3rem 0.3rem 0.3rem 0 #bdbdbd;
`;

const TodayTitle = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  padding-bottom: 3vh;
`;
const TodayContent = styled.div`
  line-height: 3vh;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: 100%;
  height: 25%;
`;

const LeafImg = styled.img`
  position: relative;
  right: -2rem;
  bottom: 2rem;
  height: 5rem;
  opacity: 0.7;
  z-index: 1000;
`;

const GuideBtn = styled.button`
  position: relative;
  width: 10rem;
  height: 3rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #73bd88;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  color: #ffffff;
  box-shadow: 0 0.3rem 0.3rem 0 #bdbdbd;
  margin-right: 8rem;
  text-align: center;
`;

export default MemMain;
