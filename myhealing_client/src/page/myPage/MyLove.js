import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import instance from "../login/instance";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const MyLove = ({ apiUrl }) => {
  const access = cookies.get("access_token");
  const navigate = useNavigate();

  useEffect(() => {
    instance
      .get(`${apiUrl}guide/love/`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((res) => {
        console.log(res);
      });
  });
  return <></>;
};

const Wrapper = styled.div`
  margin-top: 50px;
  width: 100vw;
  height: 100vh;
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
