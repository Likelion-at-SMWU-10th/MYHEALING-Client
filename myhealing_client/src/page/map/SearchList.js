import React from "react";
import styled from "styled-components";
import "./SearchList.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';


function SearchList({ apiUrl }) {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    console.log(state);
  },[]);


  const showResult = (event) => {
    navigate("/searchplacebyname");
    console.log('in');
  };

  
  return (
    <>
      <Wrapper>

        <div className="list-group wrapbox">
          {state.map((list) => {
            return <a key={list.id} onClick={()=> showResult()} className="list-group-item list-group-item-action">
                          <img src="img/search/me.svg" className=""></img>
                          <Texts>감자2</Texts>
                          <Texts>{list.created_at.substring(0,10)}</Texts>
                          <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1 addmargin">{list.title}</h5>
                            <small></small>
                          </div>
                          <p className="mb-1"></p>
                          <small className="addmargin">{list.body?list.body:list.summary}</small>
                        </a>
                    })
                }
            </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div` 
    margin-top:50px;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, rgba(213, 240, 221, 0.4) 0%, rgba(255, 255, 255, 0.4) 0.01%, rgba(236, 246, 239, 0.4) 27.08%, rgba(220, 239, 225, 0.4) 73.44%, rgba(225, 241, 229, 0.4) 81.77%, rgba(208, 237, 216, 0.4) 100%);
`;

const Texts = styled.span`
    margin-left:15px;
`;

export default SearchList;