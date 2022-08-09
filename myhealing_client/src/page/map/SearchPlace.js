import React from "react";
import Keyword from "../component/Keyword";
import Inform from "./Inform";
import styled from "styled-components";
import "./SearchPlace.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SearchPlace() {
  const navigate = useNavigate();

  const [activeColor, setActiveColor] = useState({
    keyword: false,
  });
  
  const { keyword } = activeColor;

  const handleFocusColor = color => {
    setActiveColor({
      ...activeColor,
      [color]: true,
    });
  };

  const handleBlurColor = color => {
    setActiveColor({
      ...activeColor,
      [color]: false,
    });
  };

  const searchFunction = () => {
    event.preventDefault();
    navigate("/searchplacebyname");
    console.log('submit');
  };

  return (
    <>
      <div className={keyword ? 'greensearch' : 'whitesearch'}>
        <form onSubmit={() => searchFunction()}>
          <input
              className='input-group mb-3 topsearchbox'
              onFocus={() => handleFocusColor('keyword')}
              onBlur={() => handleBlurColor('keyword')}
            ></input>
        </form>
        
        <div className={keyword ? 'container chidden' : 'container'}>
          <Inform text={"키워드로 맞춤 장소 찾기"} />
          <div className="row">
            <div className="col">
              <div className="row row-cols-1">
                <div className="col">
                  <div className="topname">
                    <img
                      className="keywordicon"
                      src="img/keyword/laughing 1.png"
                      alt="Third slide"
                    />{" "}
                    <span className="toptitle">분위기</span>
                  </div>
                  <div>
                    <div className="flex-container">
                      <Keyword text={"활발한"} />
                      <Keyword text={"조용한"} />
                      <Keyword text={"따스한"} />
                    </div>
                    <div className="flex-container">
                      <Keyword text={"싱그러운"} />
                      <Keyword text={"적극적인"} />
                      <Keyword text={"차가운"} />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="topname">
                    <img
                      className="keywordicon"
                      src="img/keyword/laughing 4.png"
                      alt="Third slide"
                    />{" "}
                    <span className="toptitle">누구랑?</span>
                  </div>
                  <div className="flex-container">
                    <Keyword text={"부모님과"} />
                    <Keyword text={"친구와"} />
                    <Keyword text={"애인과"} />
                  </div>
                  <div className="flex-container">
                    <Keyword text={"아이들과"} />
                    <Keyword text={"처음보는 사람과"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row row-cols-1">
                <div className="col">
                  <div className="topname">
                    <img
                      className="keywordicon"
                      src="img/keyword/laughing 2.png"
                      alt="Third slide"
                    />{" "}
                    <span className="toptitle">날씨</span>
                  </div>
                  <div className="flex-container">
                    <Keyword text={"화창한"} />
                    <Keyword text={"흐림"} />
                    <Keyword text={"비온 후"} />
                  </div>
                  <div className="flex-container">
                    <Keyword text={"비오는 날"} />
                    <Keyword text={"바람부는"} />
                  </div>
                </div>
                <div className="col">
                  <div className="topname">
                    <img
                      className="keywordicon"
                      src="img/keyword/laughing 5.png"
                      alt="Third slide"
                    />{" "}
                    <span className="toptitle">기타</span>
                  </div>
                  <div className="flex-container">
                    <Keyword text={"시즌제"} />
                    <Keyword text={"연중무휴"} />
                    <Keyword text={"킬링타임"} />
                  </div>
                  <div className="flex-container">
                    <Keyword text={"노트북"} />
                    <Keyword text={"카공"} />
                    <Keyword text={"신규"} />
                    <Keyword text={"음악"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="topname">
                <img
                  className="keywordicon"
                  src="img/keyword/laughing 3.png"
                  alt="Third slide"
                />{" "}
                <span className="toptitle">장소 특징</span>
              </div>
              <div className="flex-container">
                <Keyword text={"계곡"} />
                <Keyword text={"복합공간"} />
                <Keyword text={"퍼레이드"} />
                <Keyword text={"집"} />
              </div>
              <div className="flex-container">
                <Keyword text={"카페"} />
                <Keyword text={"음식점"} />
                <Keyword text={"바다"} />
                <Keyword text={"휴양지"} />
              </div>
              <div className="flex-container">
                <Keyword text={"술집"} />
                <Keyword text={"프렌차이즈"} />
                <Keyword text={"산"} />
                <Keyword text={"공연장"} />
              </div>
              <div className="flex-container">
                <Keyword text={"저렴한"} />
                <Keyword text={"가격대가 높은"} />
                <Keyword text={"사람이 많은"} />
              </div>
              <div className="flex-container">
                <Keyword text={"체험위주"} />
                <Keyword text={"관람위주"} />
              </div>
            </div>
          </div>
        </div>

        <div className={keyword ? 'container' : 'container chidden'}>
          <SerachSide>
            <Title>검색 필터 설정</Title>
            <SubTitle>모든 검색어/ 제목만 / 내용만</SubTitle>
            <Option>[모든 검색어]</Option>
            <Option>[제목만]</Option>
            <Option>[내용만]</Option>
            <img className="sampleImg" src="img/search/sampleimage.png" />
          </SerachSide>
          <SearchHistory>동작구</SearchHistory>
          <SearchHistory>광화문</SearchHistory>
          <SearchHistory>용산구</SearchHistory>
          <SearchHistory></SearchHistory>
          <SearchHistory></SearchHistory>
          <SearchHistory></SearchHistory>
        </div>
      </div>
    </>
  );
}

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

  font-family: 'Montserrat';
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

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  display: flex;
  align-items: center;

  color: #000000;
  margin-left: 20px;

  flex: none;
  order: 1;
  flex-grow: 0
`;

const Option = styled.button`
  width: 265px;
  height: 37px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 25px;
  /* or 179% */

  display: flex;
  align-items: center;

  color: #000000;
  margin-left:20px;
  background: rgba(255, 255, 255, 0.4);
  border:0px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const SearchHistory = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height:50px;

  top:0px;
  left: 400px;

  display:flex;
  justify-content: center;

  color: #000000;

  margin: 0 auto;
  width: 470px;
  height: 50px;
  background: #FFFFFF;

  border: 1px solid #E3E3E3;

`;

export default SearchPlace