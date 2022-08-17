import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TiPencil } from "react-icons/ti";
import { BsArrowLeft } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";
import Cookies from "universal-cookie";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/zoom/zoom.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Swal from "sweetalert2";
import instance from "../login/instance";

SwiperCore.use([Navigation, Pagination]);
const cookies = new Cookies();

const PostMemories = ({ apiUrl }) => {
  const Params = useParams();
  const [address, setAddress] = useState(null);
  const [title, setTitle] = useState(null);
  const [date, setDate] = useState(null);
  const [place, setPlace] = useState(null);
  const [body, setBody] = useState(null);
  const [image, setImage] = useState([]);
  const [isWriter, setIsWriter] = useState(true);

  const access = cookies.get("access_token");
  const navigate = useNavigate();

  const deleteAlert = () => {
    Swal.fire({
      title: "추억을 삭제하시겠습니까?",
      text: "확인을 누르면 추억이 삭제됩니다.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#73bd88",
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        instance
          .delete(`${apiUrl}memory/${Params.memoryID}`, {
            headers: {
              Authorization: `Bearer ${access}`,
            },
          })
          .then(() => {
            navigate(-1);
          });
      } else {
      }
    });
  };

  // 게시글 조회 api
  useEffect(() => {
    instance
      .get(`${apiUrl}memory/${Params.memoryID}`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((response) => {
        console.log(response);
        setAddress(response.data.address);
        setTitle(response.data.title);
        setDate(response.data.date);
        setPlace(response.data.place);
        setBody(response.data.body);
        setImage(response.data.images);
        setIsWriter(response.data.is_writer);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Wrapper>
      <Box>
        <Arrow onClick={() => navigate(-1)}>
          <BsArrowLeft size="27" />
        </Arrow>
        <LeftDiv>
          {isWriter ? (
            <WriterDiv>
              <EditBtn
                onClick={() => {
                  navigate(`/editMemories/${Params.memoryID}`);
                }}
              >
                <TiPencil size="27" />
              </EditBtn>
              <DeleteBtn onClick={deleteAlert}>
                <RiDeleteBin5Line size="27" />
              </DeleteBtn>
            </WriterDiv>
          ) : null}
        </LeftDiv>
        <AddressDiv>{address}</AddressDiv>
        <Title>
          <SubTitle>제목 : </SubTitle>
          <ContentTitle>{title}</ContentTitle>
        </Title>
        <Date>
          <Sub>날짜 : </Sub>
          <ContentDate>{date}</ContentDate>
        </Date>
        <Place>
          <Sub>방문한 장소명 : </Sub>
          <ContentPlace>{place}</ContentPlace>
        </Place>
        <MainText>
          <PhotoList>
            <SwiperImg
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              {image &&
                image.map((i) => {
                  return (
                    <SwiperSlide key={i.id}>
                      <ImgContainer>
                        <ImgDiv>
                          <ImageList
                            src={`http://15.164.98.6:8080${i.image}`}
                            key={i.id}
                          ></ImageList>
                        </ImgDiv>
                      </ImgContainer>
                    </SwiperSlide>
                  );
                })}
            </SwiperImg>
          </PhotoList>
          <SubText>본문 : </SubText>
          <ContentWrapper>
            <ContentText>{body}</ContentText>
          </ContentWrapper>
        </MainText>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const Arrow = styled.div`
  position: absolute;
  top: 0rem;
  left: -4rem;

  & svg {
    color: gray;
    cursor: pointer;
  }
`;

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 40rem;
  height: auto;
  margin: 5rem auto 5rem auto;
  border: 1px solid;
  padding: 1rem;
  text-align: left;
  box-shadow: 0.3rem 0.3rem 0.3rem 0 #bdbdbd;
`;

const LeftDiv = styled.div`
  position: absolute;
  right: 2rem;
  top: 1.4rem;
  display: flex;
  flex-direction: column;
`;

const WriterDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 1rem;
`;

const EditBtn = styled.div`
  & svg {
    cursor: pointer;
  }

  :hover svg {
    color: #73bd88;
  }
  margin-bottom: 0.5rem;
`;
const DeleteBtn = styled.div`
  & svg {
    cursor: pointer;
  }

  :hover svg {
    color: #73bd88;
  }
`;

const AddressDiv = styled.div`
  font-size: 0.8rem;
  margin: 0.4rem auto 0rem 2rem;
  width: 80.5%;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  width: 38rem;
`;

const SubTitle = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0.5rem 0.5rem 2rem 2rem;
`;
const ContentTitle = styled.div`
  border: none;
  font-size: 1.4rem;
  margin: 0.5rem auto 2rem 0rem;
  width: 80.5%;
  resize: none;
`;

const Date = styled.div`
  display: flex;
  flex-direction: row;
  width: 40rem;
`;
const Sub = styled.div`
  margin: 0.5rem 0.5rem 2rem 2rem;
`;
const ContentDate = styled.div`
  border: none;
  margin: 0.5rem auto 2rem 0rem;
  width: 80%;
`;
const Place = styled.div`
  display: flex;
  flex-direction: row;
  width: 80rem;
`;

const ContentPlace = styled.div`
  border: none;
  margin: 0.4rem auto 2rem 0rem;
  width: 35.4%;
`;

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
`;

const PhotoList = styled.div`
  width: 80%;
  margin: 0rem auto 0 auto;
  & .swiper-button-prev {
    display: none;
  }

  & .swiper-button-next {
    display: none;
  }
  & .swiper-pagination {
  }

  & .swiper-pagination-bullet {
    background-color: #73bd88;
    margin: 0 5px !important;
  }
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

const ImageList = styled.img`
  width: 100%;
  height: 100%;
`;

const SubText = styled.div`
  margin: 0.5rem 0.5rem 0rem 2rem;
`;

const ContentWrapper = styled.div`
  width: 80%;
  margin: 2rem auto 2rem 3rem;
`;

const ContentText = styled.div`
  border: 1px solid #73bd88;
  border-radius: 10px;
  padding: 2rem 1.5rem;
  width: 100%;
`;

export default PostMemories;
