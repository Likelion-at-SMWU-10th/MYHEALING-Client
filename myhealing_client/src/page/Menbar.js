import React from "react";
import { Outlet } from "react-router-dom";
import "./Menubar.css";
import LoginBtn from "./component/LoginBtn";

const Menubar = () => {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="./intro">
            서비스 소개
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="./searchplacebygu">
            장소 검색
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Community
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="./mem">
            추억 남기기
          </a>
        </li>

        <a className="navibar-brand" href="./home">
          <img src="img/logo.png" width={190} height={40} alt="Logo"></img>
        </a>

        <li className="nav-item">
          <LoginBtn text="Log in" hreflink="./login"/>
          <LoginBtn text="Register" hreflink="./register" />
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Menubar;
