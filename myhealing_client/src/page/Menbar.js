import React from "react";
import { Outlet } from "react-router-dom";
import "./Menubar.css";
import LoginBtn from "./component/LoginBtn";

const Menubar = () => {
  return (
    <div>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./home">
            서비스 소개
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="./map">
            장소 검색
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">
            Community
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="./mem">
            추억 남기기
          </a>
        </li>

        <a class="navibar-brand" href="./home">
          <img src="img/logo.png" width={190} height={40} alt="Logo"></img>
        </a>

        <ul class="nav justify-content-end arrrigth">
          <li class="nav-item">
            <LoginBtn text="Log in" />
          </li>
          <li class="nav-item">
            <LoginBtn text="Register" />
          </li>
        </ul>
      </ul>

      <Outlet />
    </div>
  );
};

export default Menubar;
