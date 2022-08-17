import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Address from "./Address";
import UploadPhoto from "./UploadPhoto";
import TagModal from "./TagModal";
import KeywordGroup from "./KeywordGroup";
import { HiOutlineHashtag } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import Cookies from "universal-cookie";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/zoom/zoom.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Swal from "sweetalert2";

SwiperCore.use([Navigation, Pagination]);
const cookies = new Cookies();

/*포커스기능주기*/

const EditGuide = ({ apiUrl }) => {
  const Params = useParams();

  const photoAlert = () => {
    setTimeout(() => {
      Swal.fire({
        title: "사진을 다시 올리시겠습니까?",
        text: "확인을 누르면 기존 사진은 초기화됩니다.",
        icon: "warning",
        showCancelButton: false,
        confirmButtonColor: "#73bd88",
        confirmButtonText: "확인",
        cancelButtonText: "취소",
      }).then((result) => {
        if (result.isConfirmed) {
          inputs.fileChange = true;
          console.log(inputs.fileChange);
        } else {
          console.log(inputs.fileChange);
          console.log(inputs.image);
        }
      });
    }, 2000);
  };

  const [ta, setTa] = useState(false);
  const tagAlert = () => {
    Swal.fire({
      title: "태그를 수정하시겠습니까?",
      text: "확인을 누르면 기존 태그는 초기화됩니다.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#73bd88",
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        openModal();
        setTa(true);
      } else {
      }
    });
  };

  const [inputs, setInputs] = useState({
    date: "",
    place: "",
    cost: "",
    title: "",
    body: "",
    address: "",
    star: "",
    tag: "",
    image: "",
    fileChange: false,
  });

  //onChange 함수 만들어주기
  const changeInput = (e) => {
    const newInputs = { ...inputs };
    newInputs[e.target.name] = e.target.value;
    setInputs(newInputs);
    console.log(newInputs);
  };
  const [ima, setIma] = useState([]);
  const [ntag, setNtag] = useState([]);

  // 게시글 조회 api
  useEffect(() => {
    axios
      .get(`${apiUrl}guide/${Params.guideID}`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((response) => {
        console.log(response);
        setInputs({
          address: response.data.address,
          star: response.data.star,
          title: response.data.title,
          date: response.data.date,
          place: response.data.place,
          cost: response.data.cost,
          body: response.data.body,
          image: response.data.images,
          tag: response.data.tag,
        });
        setIma(() => {
          return response.data.images;
          console.log(ima);
        });
        setNtag(() => {
          return response.data.tag;
        });
        console.log(ima);
        console.log(inputs.tag);
        // setAddress(response.data.address);
        // setStar(response.data.star);
        // setTitle(response.data.title);
        // setDate(response.data.date);
        // setPlace(response.data.place);
        // setCost(response.data.cost);
        // setBody(response.data.body);
        // setImage(response.data.images);
        // setNtag(response.data.tag);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log(ima);
  }, [ima]);

  // const [address, setAddress] = useState(null);
  // const [star, setStar] = useState(null);
  // const [title, setTitle] = useState(null);
  // const [date, setDate] = useState("");
  // const [place, setPlace] = useState(null);
  // const [cost, setCost] = useState(null);
  // const [body, setBody] = useState(null);
  // const [image, setImage] = useState([]);
  // const [ntag, setNtag] = useState([]);
  // const [fileChange, setFileChange] = useState(false);
  //api 연결

  const navigate = useNavigate();
  const access = cookies.get("access_token");

  const submitAlert = () => {
    Swal.fire({
      title: "저장하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#73bd88",
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        onSubmit();
      } else {
      }
    });
  };
  const groupTag = [];

  const onSubmit = (e) => {
    let formData = new FormData();
    const config = {
      headers: {
        "content-Type": "multipart/form-data",
        Authorization: `Bearer ${access}`,
      },
    };
    formData.append("date", inputs.date);
    formData.append("place", inputs.place);
    formData.append("cost", inputs.cost);
    formData.append("title", inputs.title);
    formData.append("body", inputs.body);
    formData.append("address", inputs.address);
    formData.append("star", inputs.star);
    if (!ta) {
      for (let i = 0; i < inputs.tag.length; i++) {
        groupTag.push(inputs.tag[i].title);
      }
      formData.append("tag", JSON.stringify(groupTag));
    } else {
      formData.append("tag", JSON.stringify(inputs.tag));
    }

    if (inputs.fileChange) {
      formData.append("file_change", inputs.fileChange);
    }
    for (let i = 0; i < inputs.image.length; i++) {
      formData.append("image", inputs.image[i]);
    }
    // FormData의 key 확인
    for (let key of formData.keys()) {
      console.log(key);
    }

    // FormData의 value 확인
    for (let value of formData.values()) {
      console.log(value);
    }
    axios
      .put(
        `${apiUrl}guide/${Params.guideID}`,

        formData,

        config
      )
      .then((res) => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // 주소
  const [ad, setAd] = useState("");
  const getAd = (gad) => {
    setAd(gad);
    inputs.address = gad;
  };

  // 사진

  const [ph, setPh] = useState([]);
  const getPh = (gph) => {
    setPh([...ph, gph]);
    inputs.image = gph;
    console.log(inputs.image);
  };

  const getdPh = (gph) => {
    setPh([gph]);
    inputs.image = gph;
    console.log(inputs.image);
  };

  //별점
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const starArray = [0, 1, 2, 3, 4];
  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  useEffect(() => {
    sendReview();
    console.log(clicked);
  }, [clicked]); //컨디마 컨디업

  const sendReview = () => {
    let starScore = clicked.filter(Boolean).length;
    console.log(starScore);
    inputs.star = starScore;
  };

  //태그
  const [tags, setTags] = useState([]);
  const [tagTrue, setTagTrue] = useState(false);
  const getTag = (gtags) => {
    setTags([...tags, gtags]);
    setTagTrue(true);
    inputs.tag = [...tags, gtags];
  };

  const resetTag = (e) => {
    const copyMyTag = [];
    setTags(copyMyTag);
    setTagTrue(false);
  };

  // <ContentText> 글자수 제한
  const [count, setCount] = useState("");
  const onInput = (e) => {
    const maxLength = 500;
    if (e.target.value.length > maxLength) {
      e.target.value = e.target.value.substr(0, maxLength);
    }
    setCount(e.target.value.length);
  };

  // 모달창
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <Wrapper>
        <MainTitle>가이드 작성하기</MainTitle>
        <Box>
          <Address
            name="address"
            value={inputs.address}
            onChange={changeInput}
            getAd={getAd}
          />
          <Star>
            <StarDiv>
              {starArray.map((el, idx) => {
                return (
                  <FaStar
                    key={idx}
                    onClick={() => handleStarClick(el)}
                    className={clicked[el] && "greenStar"}
                    size="22"
                    name="star"
                    value={inputs.star}
                  />
                );
              })}
            </StarDiv>
          </Star>
          <Title>
            <SubTitle>제목 : </SubTitle>
            <ContentTitle
              type="text"
              name="title"
              value={inputs.title}
              onChange={changeInput}
            ></ContentTitle>
          </Title>
          <Date>
            <Sub>날짜</Sub>
            <ContentDate
              type="text"
              name="date"
              placeholder="0000-00-00"
              value={inputs.date}
              onChange={changeInput}
            ></ContentDate>
          </Date>
          <Place>
            <Sub>방문한 장소명</Sub>
            <ContentPlace
              type="text"
              name="place"
              value={inputs.place}
              onChange={changeInput}
            ></ContentPlace>
          </Place>
          <Expense>
            <Sub>지출 금액</Sub>
            <ContentNum
              type="number"
              placeholder="숫자로 작성"
              name="cost"
              value={inputs.cost}
              onChange={changeInput}
            ></ContentNum>
          </Expense>
          <MainText>
            <SubText>본문</SubText>
            <ContentWrapper>
              <ContentText
                type="text"
                placeholder="최대 500자"
                rows="6"
                onInput={onInput}
                name="body"
                value={inputs.body}
                onChange={changeInput}
              ></ContentText>
              <Counter>({count === "" ? 0 : count}/500)</Counter>
            </ContentWrapper>
          </MainText>
          <PhotoList>
            <SwiperImg
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              {ima &&
                ima.map((i) => {
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
          <PhDiv>
            <UploadPhoto
              getPh={getPh}
              getdPh={getdPh}
              name="image"
              value={inputs.image}
              onChange={changeInput}
              sendImage={ima}
              onClick={photoAlert}
            ></UploadPhoto>
          </PhDiv>
          <SelectTag>
            <Sub>
              <TagDiv>
                <HiOutlineHashtag size="19" color="#73bd88" />
                <TagBtn onClick={tagAlert}>태그 선택</TagBtn>
              </TagDiv>
              <TagModal
                open={modalOpen}
                close={closeModal}
                header="키워드로 맞춤 장소 찾기"
              >
                <KeywordGroup getTag={getTag} onChange={changeInput} />
              </TagModal>
            </Sub>
            <Tags>
              {ta ? (
                <NewTag>
                  {tags.map((t) => (
                    <TagList
                      tag={t}
                      key={t}
                      name="tag"
                      value={inputs.tag}
                      onChange={changeInput}
                    >
                      {t}
                    </TagList>
                  ))}
                  {tagTrue ? <Reset onClick={resetTag}>x</Reset> : null}
                </NewTag>
              ) : (
                <NewTag>
                  {ntag.map((t) => (
                    <TagList
                      tag={t}
                      key={t.title}
                      name="tag"
                      value={inputs.tag}
                      onChange={changeInput}
                    >
                      {t.title}
                    </TagList>
                  ))}{" "}
                </NewTag>
              )}
            </Tags>
          </SelectTag>
        </Box>
        <BottomBtn>
          <CancelBtn onClick={() => navigate(-1)}>취소하기</CancelBtn>
          <SubmitBtn onClick={submitAlert}>저장하기</SubmitBtn>
        </BottomBtn>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const MainTitle = styled.div`
  line-height: 5rem;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  height: auto;
  margin: 0 auto 0 auto;
  border: 1px solid;
  padding: 1rem;
  text-align: left;
  box-shadow: 0.3rem 0.3rem 0.3rem 0 #bdbdbd;
`;

const Star = styled.div`
  display: flex;
  flex-direction: row;
  width: 38rem;
`;

const StarDiv = styled.div`
  display: flex;
  padding: 10px 0;
  margin-left: 2rem;

  & svg {
    color: #d9d9d9;
    cursor: pointer;
  }

  :hover svg {
    color: #73bd88;
  }

  & svg:hover ~ svg {
    color: #d9d9d9;
  }

  .greenStar {
    color: #73bd88;
  }
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
const ContentTitle = styled.textarea`
  outline-style: none;
  border: none;
  font-size: 1.4rem;
  margin: 0.4rem auto 2rem 0rem;
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
const ContentDate = styled.input`
  border: none;
  outline-style: none;
  margin: 0.44rem auto 2rem 0rem;
  width: 80%;
`;
const Place = styled.div`
  display: flex;
  flex-direction: row;
  width: 80rem;
`;

const ContentPlace = styled.input`
  border: none;
  outline-style: none;
  margin: 0.433rem auto 2rem 0rem;
  width: 35.4%;
`;
const Expense = styled.div`
  display: flex;
  flex-direction: row;
  width: 40rem;
`;
const ContentNum = styled.input`
  outline-style: none;
  border: none;
  margin: 0.44rem auto 2rem 0rem;
`;
const MainText = styled.div`
  display: flex;
  flex-direction: row;
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

const PhDiv = styled.div``;

const SubText = styled.div`
  margin: 0.5rem 0.5rem 0rem 2rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-content: space-between;
`;
const ContentText = styled.textarea`
  outline-style: none;
  border: none;
  margin: 0.4rem auto 0rem 0rem;
  resize: none;
  width: 100%;
`;

const Counter = styled.div`
  text-align: right;
  color: #73bd88;
`;

const SelectTag = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`;

const TagDiv = styled.div`
  &:hover {
  }
  &:active {
    padding-left: 10px;
  }
`;

const TagBtn = styled.button`
  background-color: #ffffff;
  border: none;
  color: #73bd88;
  border-radius: 0.5rem;
  margin-left: 5px;
`;

const Tags = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1.6rem;
  flex-wrap: wrap;
`;

const Reset = styled.button`
  position: relative;
  top: -0.6rem;
  border: none;
  background-color: #ffffff;
  color: #73bd88;
  padding: 0.5rem;
`;

const NewTag = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1.6rem;
  flex-wrap: wrap;
`;

const TagList = styled.div`
  margin-bottom: 1rem;
  margin-right: 0.5rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  color: #999999;
  border: 1px solid #cecece;
  border-radius: 20px;
  font-size: small;
`;

const BottomBtn = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: auto;
  justify-content: center;
  align-content: center;
  width: 50%;
  height: 4rem;
  flex-wrap: wrap;
  margin: 1rem auto 1rem auto;
`;
const CancelBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 1.7rem;
  text-align: center;
  border: 1px solid #73bd88;
  border-radius: 0.5rem;
  background-color: #ffffff;
  font-family: "NotoSansKR";
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 500;
  color: #73bd88;
  box-shadow: 0 0.3rem 0.3rem 0 #bdbdbd;
  padding-top: 0.8vh;
  margin-right: 0.2rem;

  &:hover {
    background-color: #73bd88;
    color: #ffffff;
  }
`;
const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 1.7rem;
  text-align: center;
  border: 1px solid #73bd88;
  border-radius: 0.5rem;
  background-color: #ffffff;
  font-family: "NotoSansKR";
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 500;
  color: #73bd88;
  box-shadow: 0 0.3rem 0.3rem 0 #bdbdbd;
  padding-top: 0.8vh;
  margin-left: 0.2rem;

  &:hover {
    background-color: #73bd88;
    color: #ffffff;
  }
`;

export default EditGuide;
