import React from "react";
import Keyword from "../component/Keyword";
import Inform from './Inform';
import './SearchPlace.css';

function SearchPlace() {
  return (
      <>
        <p>
            <form>
              <input className="input-group mb-3 topsearchbox">
                
              </input>
            </form>
        </p>
        <Inform text={"키워드로 맞춤 장소 찾기"} />
        <div class="container">
          <div class="row">
            <div class="col">
                <div class="row row-cols-1">
                  <div class="col">
                    <div className="topname">
                      <img
                          className="keywordicon"
                          src="img/keyword/laughing 1.png"
                          alt="Third slide"
                      />  <span className="toptitle">분위기</span> 
                    </div>
                    <p>
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
                    </p>

                  </div>
                  <div class="col">
                    <div className="topname">
                      <img
                            className="keywordicon"
                            src="img/keyword/laughing 4.png"
                            alt="Third slide"
                        />  <span className="toptitle">누구랑?</span> 
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
            <div class="col">
                <div class="row row-cols-1">
                  <div class="col">
                    <div className="topname">
                      <img
                            className="keywordicon"
                            src="img/keyword/laughing 2.png"
                            alt="Third slide"
                        />  <span className="toptitle">날씨</span>  
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
                  <div class="col">
                    <div className="topname">
                      <img
                            className="keywordicon"
                            src="img/keyword/laughing 5.png"
                            alt="Third slide"
                        />  <span className="toptitle">기타</span>  
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
            <div class="col">
                <div className="topname">
                  <img
                      className="keywordicon"
                      src="img/keyword/laughing 3.png"
                      alt="Third slide"
                  />   <span className="toptitle">장소 특징</span> 
                </div>
                <div className="flex-container">
                        <Keyword text={"계곡"} />
                        <Keyword text={"복합공간"} />
                        <Keyword text={"퍼레이드"} />
                        <Keyword text={"계곡"} />
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
                        <Keyword text={"집"} />
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
        <div>
        </div>

      </>
  );
}

export default SearchPlace;

/*

*/
