import React from "react";
import './Keyword.css';

const Keyword = ({text}) => {
    return (
        <>
            <button type="button" class="btn btn-outline-secondary btn_keyword"> {text}</button>
        </>
    );
};

export default Keyword;