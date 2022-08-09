import React from "react";
import styled from "styled-components";
import "./SearchList.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SearchList() {
  const navigate = useNavigate();

  const showResult = (event) => {
    navigate("/searchplacebyname");
    console.log('in');
  };
  
  return (
    <>
      <Wrapper>
        <div className="list-group wrapbox">
            <a onClick={()=> showResult()} className="list-group-item list-group-item-action">
                <img src="img/search/me.svg" className=""></img>
                <Texts>감자</Texts>
                <Texts>2022.07.14</Texts>
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1 addmargin">2022 광화문 핫플레이스 모음</h5>
                <small>3일전</small>
                </div>
                <p className="mb-1"></p>
                <small className="addmargin">여름에 힐링하러 가기 좋은 광화문 에 다녀왔어요~! 그 중 좋았던 곳을 추천 어쩌고 ...어쩌고</small>
            </a>
            <a onClick={()=> showResult()} className="list-group-item list-group-item-action">
                <img src="img/search/me.svg" className=""></img>
                <Texts>감자</Texts>
                <Texts>2022.07.14</Texts>
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1 addmargin">2022 광화문 핫플레이스 모음</h5>
                <small>3일전</small>
                </div>
                <p className="mb-1"></p>
                <small className="addmargin">여름에 힐링하러 가기 좋은 광화문 에 다녀왔어요~! 그 중 좋았던 곳을 추천 어쩌고 ...어쩌고</small>
            </a>
            <a onClick={()=> showResult()} className="list-group-item list-group-item-action">
                <img src="img/search/me.svg" className=""></img>
                <Texts>감자</Texts>
                <Texts>2022.07.14</Texts>
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1 addmargin">2022 광화문 핫플레이스 모음</h5>
                <small>3일전</small>
                </div>
                <p className="mb-1"></p>
                <small className="addmargin">여름에 힐링하러 가기 좋은 광화문 에 다녀왔어요~! 그 중 좋았던 곳을 추천 어쩌고 ...어쩌고</small>
            </a>
            <a onClick={()=> showResult()} className="list-group-item list-group-item-action">
                <img src="img/search/me.svg" className=""></img>
                <Texts>감자</Texts>
                <Texts>2022.07.14</Texts>
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1 addmargin">2022 광화문 핫플레이스 모음</h5>
                <small>3일전</small>
                </div>
                <p className="mb-1"></p>
                <small className="addmargin">여름에 힐링하러 가기 좋은 광화문 에 다녀왔어요~! 그 중 좋았던 곳을 추천 어쩌고 ...어쩌고</small>
            </a>
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