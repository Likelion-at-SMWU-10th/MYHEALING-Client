import React from "react";
import './Home.css';
import { Carousel } from 'react-bootstrap'; 
import FaceBottom from './bottom/FaceBottom';

const home = () => {
    return (
        <div>
            {/* image_slider */}
            <Carousel class="topbox">
                <Carousel.Item>
                    <div class="centerposition">
                        <img
                            className="rimg"
                            src="img/dog.jpeg"
                            alt="First slide"
                        />
                        <div class="cap">
                            <h2>수도권<br/>'댕댕 핫플 카페'<br/>추천 공개</h2>
                            <p><br/>"반려동물을 많이 기르는 추세인 만큼<br/>반려동물 동반 가능지에 대한 관심이 커지고 있다."<br/>[ 서울시 반려동물 동반 출입 가능 장소 ]</p>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div class="centerposition">
                        <img
                            className="rimg"
                            src="img/beach.jpeg"
                            alt="Second slide"
                        />
                        <div class="cap">
                            <h2>동해안<br/>"에메랄드빛 바다"<br/>여름철 추천 여행지</h2>
                            <p><br/>마스크 벗고 바다 만끽.<br/>개장 첫 주말 동해안 해수욕장을<br/>가득 메운 사람들</p>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                <div class="centerposition">
                    <img
                        className="rimg"
                        src="img/cool.jpeg"
                        alt="Third slide"
                    />
                    <div class="cap">
                        <h2>밀양 얼음골,<br/>한여름에도 냉기가 가득<br/>피서지로 완벽</h2>
                        <p><br/>밀양 최고 휴가지 6선 소개<br/>[ 2022 밀양 여행 추천 가이드 ]</p>
                    </div>
                </div>
                </Carousel.Item>
            </Carousel>
            <FaceBottom />
        </div>
    );
};

export default home;