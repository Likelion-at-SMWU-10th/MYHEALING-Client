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

const MyLove = ({ apiUrl }) => {
  const access = cookies.get("access_token");
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    instance
      .get(`${apiUrl}guide/love/`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((res) => {
        console.log(res);
        console.log(res.data.results);
        setData(res.data.results);
        setCount(res.data.count);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  //pagination
  const [currentpage, setCurrentpage] = React.useState(1);
  const [count, setCount] = useState();
  const [postPerPage] = React.useState(10);

  const [indexOfLastPost, setIndexOfLastPost] = React.useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = React.useState(0);
  const [currentPosts, setCurrentPosts] = React.useState(0);

  React.useEffect(() => {
    setCount(count);
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
        <TitleDiv>내가 찜한 가이드</TitleDiv>
        <Paging page={currentpage} count={count} setPage={handlePageChange} />
        {currentPosts && data.length > 0 ? (
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
                    {list.user_profile_image ? (
                      list.user_profile_image == "null" ? (
                        <img src="img/search/me.svg"></img>
                      ) : (
                        <img src={list.user_profile_image}></img>
                      )
                    ) : (
                      <img src="img/search/me.svg"></img>
                    )}
                    <Texts>{list.user_name}</Texts>
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
        ) : (
          <div>게시물이 없습니다.</div>
        )}
      </Wrapper>
    </>
  );
};

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
  margin-left: 15px;
`;

export default MyLove;
