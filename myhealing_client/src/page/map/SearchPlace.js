import React from "react";
import Keyword from "../component/Keyword";
import Inform from "./Inform";
import styled from "styled-components";
import "./SearchPlace.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function SearchPlace() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [tags, setTags] = useState([]);
  const [tagTrue, setTagTrue] = useState(false);

  const updateTags = (gtags) => {
    console.log('2' + gtags);
    console.log('json : '+JSON.stringify(tags));

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
    const sendData = {
      "gu":{state}.state,
      "tags":JSON.stringify(tags)
    }
    navigate("/searchlist",{state:sendData});
  };

  const setSearchText = (value) => {
    console.log('11'+value);
  };

  return (
    <>
      <div className="whitesearch">

        <div className="container">
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

        <Tags>
          <GuName>선택한 키워드 👉🏻&nbsp;&nbsp;&nbsp;</GuName>
          {tags.map(tag => (
            <TagList tag={tag} key={tag}>
              {tag}
            </TagList>
          ))}
          {tagTrue ? <Reset onClick={resetTag}>x</Reset> : null}
        </Tags>
        <GuName text={state} > 선택한 지역 👉🏻 &nbsp;&nbsp;&nbsp;{state}</GuName>

          <BottomWrapper>
            <LeafImg src={"/img/leaf.png"} />
            <GuideBtn onClick={searchFunction}>맞춤 장소 검색</GuideBtn>
          </BottomWrapper>
        </div>
      </div>
    </>
  );
}

const GuName = styled.p`
  margin: 0 auto;
  font-family: "Montserrat";
  text-align: center;
  margin-top: 3px;

  maring-bottom: 20px;
  vertical-align: middle;
  
`;


const Tags = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;

  margin : 0 auto;
  flex-wrap: wrap;
  margin-top:40px;
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


const BottomWrapper = styled.div`
  margin-top:50px;
  
  margin-bottom:70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 25%;
`;

const LeafImg = styled.img`
  position: relative;
  right: -2rem;
  bottom: 2rem;
  height: 5rem;
  opacity: 0.7;
  z-index: 1000;
`;

const GuideBtn = styled.button`
  position: relative;
  width: 10rem;
  height: 3rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #73bd88;
  font-family: "NotoSansKR";
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  color: #ffffff;
  box-shadow: 0 0.3rem 0.3rem 0 #bdbdbd;
  margin-right: 8rem;
  text-align: center;
`;

export default SearchPlace;

