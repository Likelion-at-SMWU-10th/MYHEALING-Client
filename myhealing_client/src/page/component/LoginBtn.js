import React from "react";
import './LoginBtn.css';

const LoginBtn = ({text}) => {
    return (
        <>
            <a className="loginbtn btn-default" href="./login" role="button">
                {text}
            </a>
        </>
    );
};

export default LoginBtn;