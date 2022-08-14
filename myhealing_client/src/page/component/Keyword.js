import React, { useState } from "react";
import "./Keyword.css";

const Keyword = ({text, updateTags}) => {
    const keywordClick = (e) => {
        console.log({text});
        updateTags({text}.text);
    };

    return (
        <>
            <button 
                type="button" 
                className="btn btn-outline-secondary btn_keyword"
                onClick={keywordClick}
                > 
                {text}
            </button>
        </>
    );
};

export default Keyword;

