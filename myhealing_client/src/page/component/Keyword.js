import React, { useState } from "react";
import "./Keyword.css";

const Keyword = ({text}) => {
    const keywordClick = (txt) => {
        console.log(txt.text);
    };

    return (
        <>
            <button 
                type="button" 
                className="btn btn-outline-secondary btn_keyword"
                onClick={() => keywordClick({text})}
                > 
                {text}
            </button>
        </>
    );
};

export default Keyword;
