import React, { useState, useEffect } from "react";
import "./KeywordGroup.css";

const KeywordGroup = ({ tags, getTag }) => {
  const clickTag = (e) => {
    console.log(e.target.value);
    getTag(e.target.value);
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <div className="row row-cols-1">
            <div className="col mb-4">
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
                  <button className="bbtn" value={"활발한"} onClick={clickTag}>
                    활발한
                  </button>
                  <button className="bbtn" value={"조용한"} onClick={clickTag}>
                    조용한
                  </button>
                  <button className="bbtn" value={"따스한"} onClick={clickTag}>
                    따스한
                  </button>
                </div>
                <div className="flex-container">
                  <button
                    className="bbtn"
                    value={"싱그러운"}
                    onClick={clickTag}
                  >
                    싱그러운
                  </button>
                  <button
                    className="bbtn"
                    value={"적극적인"}
                    onClick={clickTag}
                  >
                    적극적인
                  </button>
                  <button className="bbtn" value={"차가운"} onClick={clickTag}>
                    차가운
                  </button>
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
                <button className="bbtn" value={"부모님과"} onClick={clickTag}>
                  부모님과
                </button>
                <button className="bbtn" value={"친구와"} onClick={clickTag}>
                  친구와
                </button>
                <button className="bbtn" value={"애인과"} onClick={clickTag}>
                  애인과
                </button>
              </div>
              <div className="flex-container">
                <button className="bbtn" value={"아이들과"} onClick={clickTag}>
                  아이들과
                </button>
                <button
                  className="bbtn"
                  value={"처음보는 사람과"}
                  onClick={clickTag}
                >
                  처음보는 사람과
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row row-cols-1">
            <div className="col mb-4">
              <div className="topname">
                <img
                  className="keywordicon"
                  src="img/keyword/laughing 2.png"
                  alt="Third slide"
                />{" "}
                <span className="toptitle">날씨</span>
              </div>
              <div className="flex-container">
                <button className="bbtn" value={"화창한"} onClick={clickTag}>
                  화창한
                </button>
                <button className="bbtn" value={"흐림"} onClick={clickTag}>
                  흐림
                </button>
                <button className="bbtn" value={"비온 후"} onClick={clickTag}>
                  비온 후
                </button>
              </div>
              <div className="flex-container">
                <button className="bbtn" value={"비오는 날"} onClick={clickTag}>
                  비오는 날
                </button>
                <button className="bbtn" value={"바람부는"} onClick={clickTag}>
                  바람부는
                </button>
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
                <button className="bbtn" value={"시즌제"} onClick={clickTag}>
                  시즌제
                </button>
                <button className="bbtn" value={"연중무휴"} onClick={clickTag}>
                  연중무휴
                </button>
                <button className="bbtn" value={"킬링타임"} onClick={clickTag}>
                  킬링타임
                </button>
              </div>
              <div className="flex-container">
                <button className="bbtn" value={"노트북"} onClick={clickTag}>
                  노트북
                </button>
                <button className="bbtn" value={"카공"} onClick={clickTag}>
                  카공
                </button>
                <button className="bbtn" value={"신규"} onClick={clickTag}>
                  신규
                </button>
                <button className="bbtn" value={"음악"} onClick={clickTag}>
                  음악
                </button>
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
            <button className="bbtn" value={"계곡"} onClick={clickTag}>
              계곡
            </button>
            <button className="bbtn" value={"복합공간"} onClick={clickTag}>
              복합공간
            </button>
            <button className="bbtn" value={"퍼레이드"} onClick={clickTag}>
              퍼레이드
            </button>
            <button className="bbtn" value={"집"} onClick={clickTag}>
              집
            </button>
          </div>
          <div className="flex-container">
            <button className="bbtn" value={"카페"} onClick={clickTag}>
              카페
            </button>
            <button className="bbtn" value={"음식점"} onClick={clickTag}>
              음식점
            </button>
            <button className="bbtn" value={"바다"} onClick={clickTag}>
              바다
            </button>
            <button className="bbtn" value={"휴양지"} onClick={clickTag}>
              휴양지
            </button>
          </div>
          <div className="flex-container">
            <button className="bbtn" value={"술집"} onClick={clickTag}>
              술집
            </button>
            <button className="bbtn" value={"프렌차이즈"} onClick={clickTag}>
              프렌차이즈
            </button>
            <button className="bbtn" value={"산"} onClick={clickTag}>
              산
            </button>
            <button className="bbtn" value={"공연장"} onClick={clickTag}>
              공연장
            </button>
          </div>
          <div className="flex-container">
            <button className="bbtn" value={"저렴한"} onClick={clickTag}>
              저렴한
            </button>
            <button className="bbtn" value={"가격대가 높은"} onClick={clickTag}>
              가격대가 높은
            </button>
            <button className="bbtn" value={"사람이 많은"} onClick={clickTag}>
              사람이 많은
            </button>
          </div>
          <div className="flex-container">
            <button className="bbtn" value={"체험위주"} onClick={clickTag}>
              체험위주
            </button>
            <button className="bbtn" value={"관람위주"} onClick={clickTag}>
              관람위주
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeywordGroup;
