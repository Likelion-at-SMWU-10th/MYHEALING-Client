import React from "react";
import {Link, Outlet} from 'react-router-dom';

const Menubar = () => {
    return (
        <div>
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="./home">서비스 소개</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./map">장소 검색</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Community</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">추억 남기기</a>
                </li>

                <img
                    src="img/logo.png"
                    width={190}
                    height={40}
                    alt="Logo"
                ></img>

                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">(Log in)</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">(Register)</a>
                    </li>
                </ul>
            </ul>


            <Outlet />
        </div>
        
    );
};

export default Menubar;
  