import React from "react";
import Keyword from "../component/Keyword";
import Inform from "./Inform";
import styled from "styled-components";
import "./SearchPlace.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

function SearchPlace() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [tags, setTags] = useState([]);
  const [tagTrue, setTagTrue] = useState(false);
  const updateTags = (gtags) => {
    console.log('2' + gtags);
    setTags([...tags, gtags]);
    setTagTrue(true);
  };

  const resetTag = (e) => {
    const copyMyTag = [];
    setTags(copyMyTag);
    setTagTrue(false);
  };

  console.log(state);

  const [activeColor, setActiveColor] = useState({
    keyword: false,
  });

  const { keyword } = activeColor;

  const handleFocusColor = (color) => {
    setActiveColor({
      ...activeColor,
      [color]: true,
    });
  };

  const handleBlurColor = (color) => {
    let timer = setTimeout(()=>{ 
      setActiveColor({
        ...activeColor,
        [color]: false,
      });
    }, 200);

    return ()=>{ clearTimeout(timer) }
  };

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

  const setSearchText = (value) => {
    console.log('11'+value);
  };

  return (
    <>
      <div className={keyword ? "greensearch" : "whitesearch"}>
        <form onSubmit={() => searchFunction()}>
          <input
            className="input-group mb-3 topsearchbox"
            onFocus={() => handleFocusColor("keyword")}
            onBlur={() => handleBlurColor("keyword")}
          ></input>
        </form>

        <Tags>
          {tags.map(tag => (
            <TagList tag={tag} key={tag}>
              {tag}
            </TagList>
          ))}
          {tagTrue ? <Reset onClick={resetTag}>x</Reset> : null}
        </Tags>

        <div className={keyword ? "container chidden" : "container"}>
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
                      <Keyword text="활발한" updateTags={updateTags} />
                      <Keyword text="조용한" updateTags={updateTags} />
                      <Keyword text="따스한" updateTags={updateTags} />
                    </div>
                    <div className="flex-container">
                      <Keyword text="싱그러운" updateTags={updateTags} />
                      <Keyword text="적극적인" updateTags={updateTags} />
                      <Keyword text="차가운" updateTags={updateTags} />
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
                    <Keyword text="부모님과" updateTags={updateTags} />
                    <Keyword text="친구와" updateTags={updateTags} />
                    <Keyword text="애인과" updateTags={updateTags} />
                  </div>
                  <div className="flex-container">
                    <Keyword text="아이들과" updateTags={updateTags} />
                    <Keyword text="처음보는 사람과" updateTags={updateTags} />
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
                    <Keyword text="화창한" updateTags={updateTags} />
                    <Keyword text="흐림" updateTags={updateTags} />
                    <Keyword text="비온 후" updateTags={updateTags} />
                  </div>
                  <div className="flex-container">
                    <Keyword text="비오는 날" updateTags={updateTags} />
                    <Keyword text="바람부는" updateTags={updateTags}  />
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
                    <Keyword text="시즌제" updateTags={updateTags} />
                    <Keyword text="연중무휴" updateTags={updateTags}  />
                    <Keyword text="킬링타임" updateTags={updateTags} />
                  </div>
                  <div className="flex-container">
                    <Keyword text="노트북" updateTags={updateTags} />
                    <Keyword text="카공" updateTags={updateTags} />
                    <Keyword text="신규" updateTags={updateTags} />
                    <Keyword text="음악" updateTags={updateTags} />
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
                <Keyword text="계곡" updateTags={updateTags} />
                <Keyword text="복합공간" updateTags={updateTags} />
                <Keyword text="퍼레이드" updateTags={updateTags} />
                <Keyword text="집" updateTags={updateTags} />
              </div>
              <div className="flex-container">
                <Keyword text="카페" updateTags={updateTags} />
                <Keyword text="음식점" updateTags={updateTags} />
                <Keyword text="바다" updateTags={updateTags} />
                <Keyword text="휴양지" updateTags={updateTags} />
              </div>
              <div className="flex-container">
                <Keyword text="술집" updateTags={updateTags} />
                <Keyword text="프렌차이즈" updateTags={updateTags} />
                <Keyword text="산" updateTags={updateTags} />
                <Keyword text="공연장" updateTags={updateTags} />
              </div>
              <div className="flex-container">
                <Keyword text="저렴한" updateTags={updateTags} />
                <Keyword text="가격대가 높은" updateTags={updateTags} />
                <Keyword text="사람이 많은" updateTags={updateTags} />
              </div>
              <div className="flex-container">
                <Keyword text="체험위주" updateTags={updateTags} />
                <Keyword text="관람위주" updateTags={updateTags} />
              </div>
            </div>
          </div>
        </div>

        <div className={keyword ? "container" : "container chidden"}>
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

const Tags = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;

  margin : 0 auto;
  flex-wrap: wrap;
`;


const TagList = styled.div`
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  padding-top: 0.2rem;
  padding-bottom: 0.1rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  color: #999999;
  border: 1px solid #cecece;
  border-radius: 20px;
  font-size: small;
`;

const Reset = styled.button`
  position: relative;
  top: -0.6rem;
  border: none;
  background-color: #ffffff;
  color: #73bd88;
  padding: 0.5rem;
`;

export default SearchPlace;

