import React from "react";
import './LoginBtn.css';

const LoginBtn = ({text}) => {
    return (
        <>
            <a class="btn btn-default" href="./login" role="button">
                {text}
            </a>
        </>
    );
};

export default LoginBtn;