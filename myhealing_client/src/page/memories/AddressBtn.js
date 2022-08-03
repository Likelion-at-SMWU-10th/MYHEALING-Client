import React, { useEffect, useState } from "react";
import Postcode from "@actbase/react-daum-postcode";
import Modal from "react-bootstrap/Modal";

const AddressBtn = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button variant="primary" onClick={handleShow}>
        주소 검색
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>주소 검색</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Postcode
            style={{ width: "100%", height: "100%" }}
            jsOptions={{ animation: true, hideMapBtn: true }}
            onSelected={(data) => {
              alert(JSON.stringify(data));
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            닫기
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddressBtn;
