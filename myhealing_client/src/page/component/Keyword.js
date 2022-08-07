import React, { useState } from "react";
import "./Keyword.css";

const Keyword = ({text}) => {
    return (
        <>
            <button type="button" className="btn btn-outline-secondary btn_keyword"> {text}</button>
        </>
    );
};

export default Keyword;
