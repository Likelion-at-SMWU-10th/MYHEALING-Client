import React from "react";
import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import OurLogin from "./OurLogin";

const Login = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${"##################"}&redirect_uri=${"http://localhost:3000/kakaoLogin"}&response_type=code`;
  const handleSignKakao = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const NAVER_AUTH_URL = `${process.env.REACT_APP_HTTPSURL}/oauth/naver`;
  const handleSignNaver = () => {
    window.location.href = NAVER_AUTH_URL;
  };
  return (
    <LoginContainer>
      <LoginWrapper>
        <MyHealing>MY_HEALING</MyHealing>
        <Alert>
          가이드를 열람하기 위해서는
          <br />
          로그인이 필요해요!
        </Alert>
        <OurLogin></OurLogin>
        <br/>
        <Message>SNS 계정으로 간편하게 시작하세요.</Message>
        <KakaoBtn onClick={handleSignKakao}>
          <KakaoIcon />
          <P>카카오 계정으로 로그인</P>
        </KakaoBtn>
        <NaverBtn onClick={handleSignNaver}>
          <NaverIcon />
          <P>네이버 계정으로 로그인</P>
        </NaverBtn>
        <GoogleBtn>
          <P>구글 계정으로 로그인</P>
        </GoogleBtn>
        <LoginMessage>
          <LoginAlready>이미 가입하셨나요?</LoginAlready>
          <LoginLink>로그인 하기</LoginLink>
        </LoginMessage>
      </LoginWrapper>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 120vh;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40rem;
  height: 28rem;
`;

const MyHealing = styled.div`
  margin-bottom: 1.3rem;
  font-family: "Comfortaa";
  color: #73bd88;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 400;
`;

const Alert = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  font-family: "Mulish";
  color: #373f41;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  white-space: pre-wrap;
  line-height: 2rem;
`;

const Message = styled.div`
  margin-bottom: 1.25rem;
  font-family: "Mulish";
  color: #737b7d;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
`;

const KakaoBtn = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 25rem;
  height: 4rem;
  padding: 1rem 5.2rem;
  margin-bottom: 2rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #f9e000;
  font-family: "NotoSansKR";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  color: #191600;
  box-shadow: 0 0.3rem 0.3rem 0 #bdbdbd;
`;

const KakaoIcon = styled(RiKakaoTalkFill)`
  margin-top: auto;
  margin-bottom: auto;
`;

const P = styled.p`
  text-align: center;
  margin: auto;
`;

const NaverBtn = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 25rem;
  height: 4rem;
  padding: 1rem 5.2rem;
  margin-bottom: 2rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #2db400;
  font-family: "NotoSansKR";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  color: #ffffff;
  box-shadow: 0 0.3rem 0.3rem 0 #bdbdbd;
`;

const NaverIcon = styled(SiNaver)`
  margin-top: auto;
  margin-bottom: auto;
`;

const GoogleBtn = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 25rem;
  height: 4rem;
  padding: 1rem 5.2rem;
  margin-bottom: 2.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #cecece;
  font-family: "NotoSansKR";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  color: #ffffff;
  box-shadow: 0 0.3rem 0.3rem 0 #bdbdbd;
`;

const LoginMessage = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: "NotoSansKR";
  font-style: normal;
  color: #000000;
`;

const LoginAlready = styled.p`
  margin: 0rem 0.3rem;
  font-size: 1rem;
  font-weight: 400;
  padding-right: 2rem;
`;

const LoginLink = styled.p`
  cursor: pointer;
  margin: 0rem 0.3rem;
  font-size: 1.2rem;
  font-weight: 700;
  padding-left: 2rem;
`;

export default Login;
