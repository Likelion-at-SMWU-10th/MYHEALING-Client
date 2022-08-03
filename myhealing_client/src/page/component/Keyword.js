import React from "react";
import './Keyword.css';

const Keyword = ({text}) => {
    return (
        <>
            <a class="btn_keyword" href="./login" role="button">
                {text}
            </a>
        </>
    );
};

export default Keyword;