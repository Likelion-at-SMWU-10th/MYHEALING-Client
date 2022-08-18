import React from 'react';
import styled from "styled-components";
import "./SearchPlace.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import instance from '../login/instance';

import Cookies from "universal-cookie";
const cookies = new Cookies();

const SearchPlaceByInput = ({apiUrl}) => {
  const navigate = useNavigate();
  const [option, setOption] = useState('mix')
  const [search_text, setSearchText] = useState('')

  const searchFunction = (e) => {
    if(e) e.preventDefault();
   // navigate("/searchplacebyname");

   if(e.target.value) {
     console.log(e.target.value)
   }
    
   const access = cookies.get("access_token");
   const config = {
     headers: {
       Authorization: `Bearer ${access}`,
     },
   };
   console.log('search_text'+search_text)
   instance.get(`guide/search/`,
              {params: {filter: option,
                       query:search_text}},config)
   .then(function (response) {
        // response  
      console.log(response.data);
        
      navigate("/searchlist",{state:response.data});
   }).catch(function (error) {
        console.log(error);
       // 오류발생시 실행
   }).then(function() {
       // 항상 실행
   });
  };

  const selecetOption = (e) => {
    setOption(e.target.value)
    console.log(e.target.value)
  }

  const changeText = (e) => {
    console.log(e.target.value)
    setSearchText(e.target.value)
  }

  const selectList = (e) => {
    setSearchText(e.target.value)
  }
    return (
        <div className='greensearch'>
            <div className="container">
            <form className='formsearchbox' onSubmit={searchFunction}>
                <input
                    value={search_text}
                    onChange={changeText}
                    className="topsearchbox"
                ></input>
                <BtnSearch onClick={searchFunction}></BtnSearch>  
            </form>
            <SerachSide>
                <Title>검색 필터 설정</Title>
                <SubTitle>모든 검색어/ 제목만 / 내용만</SubTitle>
                <Option value="mix" onClick={selecetOption}>[모든 검색어]</Option>
                <Option value="title" onClick={selecetOption}>[제목만]</Option>
                <Option value="body" onClick={selecetOption}>[내용만]</Option>
                <br/>
                <img className="sampleImg" src="img/search/sampleimage.png" />
                <Option>{option=="title"?"제목만":(option=="body"?"내용만":"모든 검색어")}</Option>
            </SerachSide>
            <br/>
            <br/>
            <SearchHistory value="동작구" onClick={selectList}>동작구</SearchHistory>
            <SearchHistory value="광화문" onClick={selectList}>광화문</SearchHistory>
            <SearchHistory value="용산구" onClick={selectList}>용산구</SearchHistory>
            <SearchHistory></SearchHistory>
            <SearchHistory></SearchHistory>
            <SearchHistory></SearchHistory>
            </div>
        </div>
    );
};
const BtnSearch = styled.button`
  background: url( "img/search/search.png" ) no-repeat;
  border: none;
  width: 25px;
  height: 25px;

  position: absolute;
  right:485px;
  top: 137px;

`;

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