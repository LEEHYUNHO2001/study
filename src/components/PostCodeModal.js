import React from "react";
import Modal from "react-bootstrap/Modal";
import Postcode from "@actbase/react-daum-postcode";

export const PostCodeModal = ({
  show,
  handleClose,
  handleCompletePostCode,
}) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Postcode
          jsOptions={{ animation: true }}
          onSelected={(data) => handleCompletePostCode(data)}
        />
      </Modal>
    </div>
  );
};
