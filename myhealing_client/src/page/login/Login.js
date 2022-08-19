import React from "react";
import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import OurLogin from "./OurLogin";
import { useNavigate } from "react-router-dom";

const Login = ({ apiUrl }) => {
  const navigate = useNavigate();
  const CLIENT_ID = "a5072c4312abc89161e35fec2705c324";
  const REDIRECT_URI = "http://localhost:3000/accounts/kakao/login/callback/";
  const kakao_auth_url = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleSignKakao = () => {
    window.location.href = kakao_auth_url;
    console.log(new URL(window.location.href));
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <Alert>
          가이드를 열람하기 위해서는
          <br />
          로그인이 필요해요!
        </Alert>
        <OurLogin apiUrl={apiUrl}></OurLogin>
        <br />
        <Message>SNS 계정으로 간편하게 시작하세요.</Message>
        <KakaoBtn onClick={handleSignKakao}>
          <KakaoIcon />
          <P>카카오 계정으로 로그인</P>
        </KakaoBtn>

        <LoginMessage>
          <LoginAlready>아직 회원이 아니신가요?</LoginAlready>
          <LoginLink onClick={() => navigate("/register")}>
            회원가입 하기
          </LoginLink>
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
  height: 100vh;
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
  color: #373f41;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  white-space: pre-wrap;
  line-height: 3rem;
`;

const Message = styled.div`
  margin-bottom: 1.25rem;
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
  border-radius: 5px;
  background-color: #f9e000;
  font-family: "NotoSansKR";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  color: #191600;
`;

const KakaoIcon = styled(RiKakaoTalkFill)`
  margin-top: auto;
  margin-bottom: auto;
`;

const P = styled.p`
  text-align: center;
  margin: auto;
`;

const LoginMessage = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
