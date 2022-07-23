import React, { useRef } from "react";
import { CloseButton } from "react-bootstrap";
import styled from "styled-components";

const Bottom = () => {
  const bottomPop = useRef();
  const handleClose = () => {
    bottomPop.current.style.display = "none";
  };
  return (
    <BottomPopup ref={bottomPop}>
      <CloseButton onClick={handleClose} />

      <Left>
        <SignupText>
          나만의 힐링플레이스 공유 사이트, MY_HEALING <br />
          MY_HEALING을 통해 다양한 가이드를 얻어가세요.
        </SignupText>
        <LeafImg src={"/img/leaf.png"} />
      </Left>
      <Right>
        <JoinTodayBtn>Join Today</JoinTodayBtn>
        <ContactBtn>Contact us</ContactBtn>
      </Right>
    </BottomPopup>
  );
};

const BottomPopup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: auto;
  background-color: #e5e5e5;
  justify-content: center;
  opacity: 0.7;
  width: 100%;
  height: 13rem;
  position: fixed;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: 1500;
`;

const Left = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 50%;
`;

const SignupText = styled.div`
  font-family: "Comfortaa";
  font-weight: 400;
  font-style: normal;
  font-size: 2.7vmin;
  white-space: nowrap;
  overflow: hidden;
`;

const LeafImg = styled.img`
  height: 8vmin;
  float: left;
  white-space: nowrap;
  overflow: hidden;
`;

const Right = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: auto;
  justify-content: center;
  align-content: center;
  height: 12rem;
  width: 50%;
  flex-wrap: wrap;
`;

const JoinTodayBtn = styled.button`
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

const ContactBtn = styled.button`
  position: relative;
  width: 10rem;
  height: 3rem;
  text-align: auto;
  border: 1px solid #73bd88;
  border-radius: 0.5rem;
  background-color: #ffffff;
  font-family: "NotoSansKR";
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 600;
  color: #73bd88;
  box-shadow: 0 0.3rem 0.3rem 0 #bdbdbd;
  padding-top: 0.8vh;
  margin-left: 2vw;
  margin-right: 2vw;
`;

export default Bottom;
