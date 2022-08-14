import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/zoom/zoom.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";

import { MdOutlineAddPhotoAlternate } from "react-icons/md";

SwiperCore.use([Navigation, Pagination]);

const UploadPhoto = ({ getPh }) => {
  //부모
  const clickPh = (e) => {
    console.log(e);
    getPh(e);
  };

  //사진 첨부
  const [img, setImg] = useState([]);
  const addImg = (e) => {
    const nowSelectImgList = e.target.files;
    console.log(nowSelectImgList[0]);
    clickPh(nowSelectImgList[0]);
    const nowImgUrlList = [...img];
    for (let i = 0; i < nowSelectImgList.length; i += 1) {
      const nowImgUrl = URL.createObjectURL(nowSelectImgList[i]);
      nowImgUrlList.push(nowImgUrl);
      //clickPh(nowImgUrl);
    }

    setImg(nowImgUrlList);

    //e.target.value = "";
  };

  const deleteImg = (e) => {
    const nowIdx = e.target.value;
    const copyMyImg = [...img];

    copyMyImg.splice(nowIdx, 1);

    setImg(copyMyImg);
  };

  return (
    <>
      <Wrapper>
        {img.length === 0 ? (
          <NoImg>사진을 추가해주세요</NoImg>
        ) : (
          <SwiperImg
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {img.map(function imageList(image, i) {
              return (
                <SwiperSlide key={image}>
                  <ImgContainer>
                    <ImgDiv>
                      <Imgs src={image} alt="사진을 추가해주세요" />
                    </ImgDiv>
                    <DeleteBtn type="submit" onClick={deleteImg} value={i}>
                      X
                    </DeleteBtn>
                  </ImgContainer>
                </SwiperSlide>
              );
            })}
          </SwiperImg>
        )}
      </Wrapper>
      <div>
        <AddLabel htmlFor="input-file" onChange={addImg}>
          <PDiv>
            <MdOutlineAddPhotoAlternate size="19" color="#73bd88" />
            <Ptag>사진 첨부</Ptag>
          </PDiv>
          <input
            type="file"
            multiple
            id="input-file"
            style={{ display: "none", width: "100%", height: "100%" }}
            accept="image/*"
          />
        </AddLabel>
      </div>
    </>
  );
};

const Wrapper = styled.div`
  & .swiper-button-prev {
    color: #73bd88;
  }

  & .swiper-button-next {
    color: #73bd88;
  }
  & .swiper-pagination {
  }

  & .swiper-pagination-bullet {
    background-color: #73bd88;
    margin: 0 5px !important;
  }
`;

const NoImg = styled.div`
  font-size: 15px;
  width: 100%;
  height: 20vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border: 1px dashed lightgray;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: lightgrey;
  text-align: center;
`;

const SwiperImg = styled(Swiper)`
  width: auto;
  height: 14rem;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const ImgDiv = styled.div`
  width: auto;
  height: 85%;
`;
const Imgs = styled.img`
  width: 100%;
  height: 100%;
`;

const DeleteBtn = styled.button`
  color: #73bd88;
  width: 20px;
  height: 20px;
  font-size: 15px;
  font-weight: 1000;
  border: none;
  background-color: #ffffff;
  text-align: center;
`;

const AddLabel = styled.label`
  margin-left: 1.1rem;
  margin-top: 10px;
  padding: 6px 15px;
  color: black;
  cursor: pointer;
`;
const PDiv = styled.div`
  &:hover {
  }

  &:active {
    padding-left: 10px;
  }
`;

const Ptag = styled.p`
  float: right;
  margin-left: 10px;
  margin-top: 2px;
  color: #73bd88;
`;

export default UploadPhoto;
