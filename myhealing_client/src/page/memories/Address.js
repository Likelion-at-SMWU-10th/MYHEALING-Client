import React, { useState } from "react";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";
import AddressModal from "./AddressModal";

const Address = ({ getAd }) => {
  //부모
  const clickAd = (e) => {
    console.log(e);
    getAd(e);
  };

  // 모달창

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  // 주소
  const [kakaoAddress, setKakaoAddress] = useState("");
  const handle = (data) => {
    setKakaoAddress(data.address);
    clickAd(data.address);
    closeModal();
  };

  return (
    <>
      <Wrapper>
        <AdInput
          type="text"
          placeholder="주소 검색"
          readOnly
          value={kakaoAddress || ""}
          onClick={openModal}
          name="address"
        />
        <AddressModal open={modalOpen} close={closeModal} header="주소 검색">
          <DaumPostcode
            onComplete={handle} // 값 선택 시 실행되는 이벤트
            autoClose={false} // 값 선택 시 자동 닫힘 설정
          />
        </AddressModal>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;
const AdInput = styled.input`
  outline-style: none;
  border: none;
  font-size: 0.8rem;
  margin: 0.4rem auto 0rem 2rem;
  width: 80.5%;
  resize: none;
  cursor: pointer;
  &:hover {
    color: #73bd88;
  }
  &:active {
    color: #73bd88;
  }
`;

export default Address;
