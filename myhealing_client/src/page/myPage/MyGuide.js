import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import instance from "../login/instance";
import Cookies from "universal-cookie";
import Paging from "../../Paging";
import "../../Paging.css";
import "../map/SearchList.css";

const cookies = new Cookies();

const MyGuide = ({ apiUrl }) => {
  const access = cookies.get("access_token");
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    instance
      .get(`${apiUrl}guide/mypage/`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  //pagination
  const [currentpage, setCurrentpage] = React.useState(1);
  const [count, setCount] = useState(0);
  const [postPerPage] = React.useState(10);

  const [indexOfLastPost, setIndexOfLastPost] = React.useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = React.useState(0);
  const [currentPosts, setCurrentPosts] = React.useState(0);

  React.useEffect(() => {
    setCount(data.length);
    setIndexOfLastPost(currentpage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(data.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentpage, indexOfFirstPost, indexOfLastPost, data, postPerPage]);

  const handlePageChange = (page) => {
    setCurrentpage(page);
  };

  return (
    <>
      <Wrapper>
        <TitleDiv>내가 작성한 가이드</TitleDiv>
        {currentPosts && data.length > 0 ? (
          <>
            <Paging
              page={currentpage}
              count={count}
              setPage={handlePageChange}
            />
            <ContentDiv>
              <div className="list-group wrapbox">
                {currentPosts.map((list) => {
                  return (
                    <a
                      key={list.id}
                      className="list-group-item list-group-item-action"
                      onClick={() => {
                        navigate(`/postGuide/${list.id}`);
                      }}
                    >
                      <Texts>{list.created_at.substring(0, 10)}</Texts>
                      <StitleDiv className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1 addmargin">{list.title}</h5>
                        <small></small>
                      </StitleDiv>
                      <p className="mb-1"></p>
                      <ScontentDiv className="addmargin">
                        {list.summary}
                      </ScontentDiv>
                    </a>
                  );
                })}
              </div>
            </ContentDiv>
          </>
        ) : (
          <div>
            <Wrap>
              <LoginAlready>아직 가이드를 작성하시지 않았나요?</LoginAlready>
              <LoginLink onClick={() => navigate("/mem")}>
                가이드 작성하기
              </LoginLink>
            </Wrap>
          </div>
        )}
      </Wrapper>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30vh;
`;

const LoginAlready = styled.p`
  font-size: 1rem;
  font-weight: 400;
  padding-right: 2rem;
`;

const LoginLink = styled.p`
  cursor: pointer;

  font-size: 1.2rem;
  font-weight: 700;
  padding-left: 2rem;
`;

const TitleDiv = styled.div`
  font-size: 30px;
  margin: auto auto 3rem auto;
`;
const ContentDiv = styled.div`
  text-align: left;
`;
const StitleDiv = styled.div`
  margin-left: -5px;
`;
const ScontentDiv = styled.div`
  margin: 2px 0 2px 5px;
`;

const Wrapper = styled.div`
  margin-top: 50px;
  padding-bottom: 60vh;
  width: 100vw;
  height: auto;
  text-align: center;
  background: linear-gradient(
    180deg,
    rgba(213, 240, 221, 0.4) 0%,
    rgba(255, 255, 255, 0.4) 0.01%,
    rgba(236, 246, 239, 0.4) 27.08%,
    rgba(220, 239, 225, 0.4) 73.44%,
    rgba(225, 241, 229, 0.4) 81.77%,
    rgba(208, 237, 216, 0.4) 100%
  );
`;

const Texts = styled.span`
  margin-left: 5px;
`;

export default MyGuide;
