import React from "react";
import styled from "styled-components";
import Inform from "../map/Inform";
import "./IntroPage.css";

const IntroPage = () => {
    return (
        <>
            <nav id="navbar-example2" className="navbar navbar-light px-3">
                <TopBtn  href="#scrollspyHeading1">About our service</TopBtn>
                <TopBtn  href="#scrollspyHeading2">How to use our service</TopBtn>
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabindex="0">
                <Wrapper id="scrollspyHeading1">
                    <Title>About our service</Title>
                    <WrapImg>
                        <img src="/img/intro/intro1.jpeg"  className="introimg"/>
                    </WrapImg>
                    <Texts>
                        MY_HEALING은 힐링 플레이스 검색 서비스로,<br/>
                        평소 본인이 힐링 장소를 찾을 때 검색하는 데 시간을 많이 쏟는 편인데, 이 웹을 통해  검색 시간을 단축하고 힐링 장소 선정에 편리함을 주고 싶어 기획하게 되었습니다.<br/>
                        <br/>
                        타 웹페이지와 차별화되는 MY_HEALING만의 특징은, 선택하는데 어려움을 겪는 사람들을 위해 <br/>
                        여러 키워드를 제공하여 도움을 주고, 여러 가이드들(ex. 비오는 날 가기 좋은 장소)을 제공하여 <br/>
                        장소에 대한 구체적인 후기를 남길 수 있으며, <br/>
                        일기형식으로 방문한 장소에 대한 추억도 남길 수 있습니다.<br/><br/>
                    </Texts><br/>
                </Wrapper>
                <br/><br/>
                <Wrapper id="scrollspyHeading2">
                    <Title>How to use our service</Title>
                    <WrapImg>
                        <img src="/img/intro/intro2.jpeg"  className="introimg"/>
                    </WrapImg>
                    <Texts>
                        지도, 키워드 검색, 검색 총 3가지 방법으로 검색이 가능하며 사용자 위치 기반 서비스를 제공하여 사용자의 현재 <br/>
                        위치부터 가까운 순으로 위치를 옮기며 장소를 찾을 수 있다.<br/>
                        만약 마땅히 찾을 장소가 없다면, 제시된 키워드 중 본인의 성향과 맞는 키워드를 선택해 장소를 찾을 수 있다.<br/>
                        <br/>
                        다녀온 장소에 대한 가이드를 작성할 수 있는 페이지 / 가이드 작성에 어려움을 느끼는 사용자를 위해 <br/>
                        랜덤 가이드 라인을 제공하고, 필수 입력 항목( ex. 비용, 분위기, 위치 등)을 만들어 쉽게 작성하도록 도움을 준다.<br/>
                        또한, 오늘의 추억 남기기 기능을 통해 다녀온 장소에 대한 나의 기분 등 일기처럼 tmi를 쓸 수 있는 기능을 제공한다.
                    </Texts><br/>
                </Wrapper>
                <br/><br/><br/><br/>
            </div>
        </>
    );
};

const TopBtn = styled.a`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 40px;

  top: 0px;
  left: 100px;

  display: flex;
  justify-content: center;

  color: #000000;

  margin: 0 auto;
  width: 50%;
  height: 40px;
  background: #ffffff;

  border: 1px solid #e3e3e3;
  text-decoration : none;
`;

const Wrapper = styled.div`
    position: relative;
    width: 1032px;
    height: 600px;

    margin: 0 auto;
    margin-top:42px;

    background: linear-gradient(180deg, rgba(221, 221, 221, 0.55) 27.08%, rgba(136, 143, 138, 0) 100%);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    border: 1px solid #e3e3e3;
`;


const Title = styled.div`
    position: absolute;
    width: 257px;
    height: 186px;
    left: 33px;
    top: 115px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 48px;
    display: flex;
    align-items: flex-end;

    color: #FFFFFF;

`;

const WrapImg = styled.div`
    width: 1030px;
    height: 350px;
    overflow: hidden
`;

const Texts =  styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  margin-top:60px;
  margin-left:30px;
`;


export default IntroPage;
