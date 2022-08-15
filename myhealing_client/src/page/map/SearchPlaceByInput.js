import React from 'react';
import styled from "styled-components";
import "./SearchPlace.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

const SearchPlaceByInput = () => {
  const searchFunction = (value) => {
    //event.preventDefault();
   // navigate("/searchplacebyname");
    navigate("/searchlist");
    
    console.log('submit');
    axios.get("http://127.0.0.1:8000/guide/")
    .then(function (response) {
         // response  
         console.log(response.data);
    }).catch(function (error) {
        // 오류발생시 실행
    }).then(function() {
        // 항상 실행
    });
  };

    return (
        <div className='greensearch'>
            <div className="container">
            <form onSubmit={() => searchFunction()}>
                <input
                    className="input-group mb-3 topsearchbox"
                ></input>
            </form>
            <SerachSide>
                <Title>검색 필터 설정</Title>
                <SubTitle>모든 검색어/ 제목만 / 내용만</SubTitle>
                <Option>[모든 검색어]</Option>
                <Option>[제목만]</Option>
                <Option>[내용만]</Option>
                <img className="sampleImg" src="img/search/sampleimage.png" />
            </SerachSide>
            <SearchHistory onClick={() => searchFunction("동작구")}>동작구</SearchHistory>
            <SearchHistory onClick={() => searchFunction("광화문")}>광화문</SearchHistory>
            <SearchHistory onClick={() => searchFunction("용산구")}>용산구</SearchHistory>
            <SearchHistory></SearchHistory>
            <SearchHistory></SearchHistory>
            <SearchHistory></SearchHistory>
            </div>
        </div>
    );
};

const SerachSide = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 350px;
  height: 407px;
  left: 63px;
  top: 172px;

  background: rgba(255, 255, 255, 0.4);
`;

const Title = styled.div`
  width: 316px;
  height: 72px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  display: flex;
  align-items: center;

  color: #000000;
  margin-left: 20px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const SubTitle = styled.div`
  width: 316px;
  height: 64px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  display: flex;
  align-items: center;

  color: #000000;
  margin-left: 20px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Option = styled.button`
  width: 265px;
  height: 37px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 25px;
  /* or 179% */

  display: flex;
  align-items: center;

  color: #000000;
  margin-left: 20px;
  background: rgba(255, 255, 255, 0.4);
  border: 0px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const SearchHistory = styled.button`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 50px;

  top: 0px;
  left: 400px;

  display: flex;
  justify-content: center;

  color: #000000;

  margin: 0 auto;
  width: 470px;
  height: 50px;
  background: #ffffff;

  border: 1px solid #e3e3e3;
`;

export default SearchPlaceByInput;