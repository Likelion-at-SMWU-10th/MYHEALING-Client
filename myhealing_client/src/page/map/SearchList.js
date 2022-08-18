import React from "react";
import styled from "styled-components";
import "./SearchList.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import instance from '../login/instance';
import axios from 'axios';
import Inform from './Inform';
import './SearchPlace.css';


function SearchList({ apiUrl }) {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [listone, setList] = useState(state.results)
  const [next, setNext] = useState(state.next)

  useEffect(() => {
    console.log(state);
  },[]);


  const showResult = (id) => {
    //navigate("/searchplacebyname");

    navigate("/postguide/".concat(id));
  };

  const isNext = () => {
    console.log(next)
    if(next) {
      axios.get(next)
      .then(function (response) {
           // response  

         setList(listone.concat(response.data.results))
         setNext(response.data.next)
      }).catch(function (error) {
           console.log(error);
          // 오류발생시 실행
      }).then(function() {
          // 항상 실행
      });
    }
  }

  
  return (
    <>
      <Wrapper>

        <div className="list-group wrapbox">
          {listone.map((list) => {
            return <a key={list.id} onClick={()=>showResult(list.id)} className="list-group-item list-group-item-action">
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
            {next?
            <button type="button" className="btn btn-outline-success btnNext" onClick={isNext}>더보기</button>:<div></div>}
            </div>
            <br/><br/>

            <div className="container">
              <Inform text={"힐링 플레이스 더 찾아보기"} />
              <div className="row">
                <div className="col">
                    <div className="row row-cols-1">
                      <div className="col">
                        <div className="card">
                            <img src="img/search/search01.png" className="card-img-top" alt="firstcard"></img>
                            <div className="card-body">
                                <p className="card-text">제주도 원조 오메기떡, 드디어 광화문 상륙 !!</p>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col">
                    <div className="row row-cols-1">
                      <div className="col">
                        <div className="card">
                            <img src="img/search/search03.png" className="card-img-top" alt="firstcard"></img>
                            <div className="card-body">
                                <p className="card-text">전국 체인 맛집, 명품 한우<br/>07.01 광화문점 오픈</p>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col">
                    <div className="row row-cols-1">
                      <div className="col">
                        <div className="card">
                            <img src="img/search/search02.jpeg" className="card-img-top" alt="firstcard"></img>
                            <div className="card-body">
                                <p className="card-text">수많은 유튜버들이 방문한 그 곳,<br/>광화문 스시 맛집</p>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>  
          </div>
            <br/><br/>
            <br/><br/>
                
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div` 
    margin-top:50px;
    width: 100vw;
    height: auto;
    background: linear-gradient(180deg, rgba(213, 240, 221, 0.4) 0%, rgba(255, 255, 255, 0.4) 0.01%, rgba(236, 246, 239, 0.4) 27.08%, rgba(220, 239, 225, 0.4) 73.44%, rgba(225, 241, 229, 0.4) 81.77%, rgba(208, 237, 216, 0.4) 100%);
`;

const Texts = styled.span`
    margin-left:15px;
`;

export default SearchList;