import React from "react";
import './LoginBtn.css';

const LoginBtn = ({text, hreflink}) => {
    return (
        <>
            <a className="loginbtn btn-default" href={hreflink} role="button">
                {text}
            </a>
        </>
    );
};

export default LoginBtn;