import React from 'react';
import styled from 'styled-components';
import "./SearchPlaceByGu.css";
import { useNavigate } from 'react-router-dom';

function GuLists({ gu }) {
    const navigate = useNavigate();
      
    const clickGu = (guname) => {
        navigate('/searchplace',{state: guname});
    };

    return (
        <IconGu onClick={()=> clickGu(gu.guname)}>
            <img className="guimg" value={gu.value} src={gu.imgsrc}></img>
            <GuLabel>{gu.guname}</GuLabel>
        </IconGu>
    );
}

const SearchPlaceByGu = () => {
    const gus = [
        {
          id: 1,
          value: 'gangnamgu',
          guname: '강남구',
          imgsrc: 'img/gus/gangnamgu.png'
        },
        {
          id: 2,
          value: 'gangdonggu',
          guname: '강동구',
          imgsrc: 'img/gus/gangdonggu.png'
        },
        {
          id: 3,
          value: 'gangbukgu',
          guname: '강북구',
          imgsrc: 'img/gus/gangbukgu.png'
        },
        {
          id: 4,
          value: 'gangseougu',
          guname: '강서구',
          imgsrc: 'img/gus/gangseougu.png'
        },
        {
          id: 5,
          value: 'gwanakgu',
          guname: '관악구',
          imgsrc: 'img/gus/gwanakgu.png'
        },
        {
          id: 6,
          value: 'gwangjingu',
          guname: '광진구',
          imgsrc: 'img/gus/gwangjingu.png'
        },
        {
          id: 7,
          value: 'gurogu',
          guname: '구로구',
          imgsrc: 'img/gus/gurogu.png'
        },
        {
          id: 8,
          value: 'geumcheongu',
          guname: '금천구',
          imgsrc: 'img/gus/geumcheongu.png'
        },
        {
          id: 9,
          value: 'nowongu',
          guname: '노원구',
          imgsrc: 'img/gus/nowongu.png'
        },
        {
          id: 10,
          value: 'dobonggu',
          guname: '도봉구',
          imgsrc: 'img/gus/dobonggu.png'
        },
        {
          id: 11,
          value: 'ddmgu',
          guname: '동대문구',
          imgsrc: 'img/gus/ddmgu.png'
        },
        {
          id: 12,
          value: 'dongjakgu',
          guname: '동작구',
          imgsrc: 'img/gus/dongjakgu.png'
        },
        {
          id: 13,
          value: 'mapogu',
          guname: '마포구',
          imgsrc: 'img/gus/mapogu.png'
        },
        {
          id: 14,
          value: 'sdm',
          guname: '서대문구',
          imgsrc: 'img/gus/sdm.png'
        },
        {
          id: 15,
          value: 'seochogu',
          guname: '서초구',
          imgsrc: 'img/gus/seochogu.png'
        },
        {
          id: 16,
          value: 'sd',
          guname: '성동구',
          imgsrc: 'img/gus/sungdonggu.png'
        },
        {
          id: 17,
          value: 'sb',
          guname: '성북구',
          imgsrc: 'img/gus/sb.png'
        },
        {
          id: 18,
          value: 'songpagu',
          guname: '송파구',
          imgsrc: 'img/gus/songpagu.png'
        },
        {
          id: 19,
          value: 'yangcheongu',
          guname: '양천구',
          imgsrc: 'img/gus/yangcheongu.png'
        },
        {
          id: 20,
          value: 'ydp',
          guname: '영등포구',
          imgsrc: 'img/gus/ydp.png'
        },
        {
          id: 21,
          value: 'yongsangu',
          guname: '용산구',
          imgsrc: 'img/gus/yongsan.png'
        },
        {
          id: 22,
          value: 'ep',
          guname: '은평구',
          imgsrc: 'img/gus/ep.png'
        },
        {
          id: 23,
          value: 'jongnogu',
          guname: '종로구',
          imgsrc: 'img/gus/jongnogu.png'
        },
        {
          id: 24,
          value: 'junggu',
          guname: '중구',
          imgsrc: 'img/gus/junggu.png'
        },
        {
          id: 25,
          value: 'jungnaggu',
          guname: '중랑구',
          imgsrc: 'img/gus/jungnaggu.png'
        }
      ];

    return (
        <Wrapper>
            <GuListss>
                {gus.map(gu => (
                    <GuLists gu={gu} />
                ))}
            </GuListss>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin-top:70px;
`;

const GuListss = styled.div`
    width:80%;
    height:auto;
    display: flex;

    margin : 0 auto;
    flex-wrap: wrap;
`;

const GuLabel = styled.p`
    margin-top:10px;
    width:120px;
    text-align: center;
`;

const IconGu = styled.div`
    width:120px;
    margin: 15px;
`;

export default SearchPlaceByGu;