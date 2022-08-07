import React from "react";
import Keyword from "../component/Keyword";
import Inform from './Inform';
import { Carousel } from 'react-bootstrap'; 
import './SearchPlace.css';
//import './SearchPlaceByName.css';

function SearchPlaceByName() {
  return (
      <>
        <p>
            <form>
              <input className="input-group mb-3 topsearchbox">
                
              </input>
            </form>
        </p>
        <Inform text={"'광화문'에 대한 검색 결과"} />
        <div className="container">
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
      </>
  );
}

export default SearchPlaceByName;

/*

*/
