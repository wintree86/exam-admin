import React from "react";
import styled from "styled-components";
import { Button } from "../Style";

function Modal({ title, isOpen, children, actions }) {
  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalPopup>
        <ModalHeader>{title}</ModalHeader>
        <ModalContents>{children}</ModalContents>
        {actions.length > 0 && (
          <ModalActions>{actions.map((action) => action)}</ModalActions>
        )}
      </ModalPopup>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.85);
  vertical-align: middle;
  line-height: 1;
  position: fixed;
  top: 0 !important;
  left: 0 !important;
`;

const ModalPopup = styled.div`
  position: absolute;
  z-index: 1000;
  text-align: left;
  background-color: #fff;
  box-shadow: 1px 3px 3px 0 rgb(0 0 0 / 20%), 1px 3px 15px 2px rgb(0 0 0 / 20%);
  transform: translateX(50%) translateY(15%);
  border-radius: 12px;
  width: 50%;
  /* height: 70%; */
`;

const ModalHeader = styled.div`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid rgba(34, 36, 38, 0.15);
  font-weight: 700;
`;
const ModalContents = styled.div`
  padding: 1.5rem;
  background: #fff;
`;
const ModalActions = styled.div`
  padding: 1.25rem 1.5rem;
  border-top: 1px solid rgba(34, 36, 38, 0.15);
  font-weight: 700;
  text-align: right;
`;

export default Modal;
