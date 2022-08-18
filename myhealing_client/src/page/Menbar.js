import React from "react";
import { Outlet } from "react-router-dom";
import "./Menubar.css";
import LoginBtn from "./component/LoginBtn";
import styled from "styled-components";

const Menubar = () => {
  const user = localStorage.getItem("user");

  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/intro">
            서비스 소개
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/searchplacebyinput">
            장소 검색
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/searchplacebygu">
            맞춤 장소 찾기
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/mem">
            추억 남기기
          </a>
        </li>
        <a className="navibar-brand" href="/home">
          <Logo>
            <LogoDiv>
              MY_HEALING
              <LogoImg
                src="/img/leaf2.svg"
                width={190}
                height={40}
                alt="Logo"
              ></LogoImg>
            </LogoDiv>
          </Logo>
        </a>
        <li className="nav-item">
          {user ? (
            <LoginBtn text="My Page" hreflink="/mypage" />
          ) : (
            <>
              <LoginBtn text="Log in" hreflink="/login" />
              <LoginBtn text="Register" hreflink="/register" />
            </>
          )}
        </li>
      </ul>

      <Outlet />
    </div>
  );
};
const Logo = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`;
const LogoDiv = styled.div`
  position: relative;
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 400;
  color: #73bd88;
  font-size: 2rem;
  float: left;
`;
const LogoImg = styled.img`
  position: absolute;
  left: 8rem;
`;
export default Menubar;
