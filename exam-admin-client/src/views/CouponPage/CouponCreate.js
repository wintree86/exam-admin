import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import styled from "styled-components";

import Modal from "../../components/Modal";
import { Button } from "../../components/Style";
import { Container, Field } from "../../components/Style";
import { COUPON, VAR } from "../../constants/const";

const couponType = [
  { value: COUPON.DISCOUNT_AMOUNT, label: "할인(금액)" },
  { value: COUPON.DISCOUNT_RATE, label: "할인(율)" },
  { value: COUPON.FREE_SHIIPING, label: "무료 배송" },
  { value: COUPON.TRIAL_MONTH, label: "무료 구독" },
];

function CouponCreate({ isOpen, onClose }) {
  const [type, setType] = useState({ value: "", lable: "" });
  const [value, setValue] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [amount, setAmount] = useState("");
  const [expiredPeriod, setExpiredPeriod] = useState(0);
  const [minPurchase, setMinPurchase] = useState(0);
  const [maxDiscountCost, setMaxDiscountCost] = useState(0);

  const checkValidation = () => {
    let valid = false;

    if (type.value === "") {
      alert("쿠폰 카테고리를 설정해주세요");
    } else if (amount > VAR.MAX_ISSUE_COUNT) {
      alert("쿠폰은 최대 100,000개 까지 발급 가능합니다.");
    } else if (isAmountType() && value === 0) {
      alert("할인 금액(율)을 입력해주세요.");
    } else {
      valid = true;
    }

    return valid;
  };

  const onOk = () => {
    if (checkValidation()) {
      window.confirm("쿠폰을 생성하시겠습니까?")
      const params = {
        value,
        startDate,
        endDate,
        amount,
        expiredPeriod,
        minPurchase,
        maxDiscountCost,
        type: type.value,
      };
    }

    // 쿠폰 생성

    // onClose();
  };

  const isAmountType = () =>
    [COUPON.DISCOUNT_AMOUNT, COUPON.DISCOUNT_RATE].indexOf(type.value) > -1;

  // 타입 변경시 할인금액,비율 초기화
  useEffect(() => {
    if (!isAmountType()) {
      setValue(0);
    }
  }, [type]);

  return (
    <Modal
      title="쿠폰 생성"
      isOpen={isOpen}
      onClose={onClose}
      actions={[
        <Button onClick={onClose}>취소</Button>,
        <Button onClick={onOk}>생성</Button>,
      ]}
    >
      <Container>
        <Field cols={2} width={["100px", "auto"]}>
          <span>쿠폰타입</span>
          <Select options={couponType} onChange={setType} />
        </Field>

        <Field cols={2} width={["100px", "auto"]}>
          <span>할인(금액 / %)</span>
          <Input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={!isAmountType()}
          ></Input>
        </Field>

        <Field cols={2} width={["100px", "auto"]}>
          <span>쿠폰시작일</span>
          <DatePicker
            locale="ko"
            onChange={setStartDate}
            selected={startDate}
            minDate={new Date()}
            popperModifiers={{ preventOverflow: { enabled: true } }}
          />
        </Field>
        <Field cols={2} width={["100px", "auto"]}>
          <span>쿠폰종료일</span>
          <DatePicker
            locale="ko"
            onChange={setEndDate}
            selected={endDate}
            minDate={new Date()}
            popperModifiers={{ preventOverflow: { enabled: true } }}
          />
        </Field>
        <Field cols={2} width={["100px", "auto"]}>
          <span>쿠폰 발행 수</span>
          <Input
            type="text"
            onChange={setAmount}
            max="100000"
            placeholder="1회 최대 발급쿠폰 수: 100,000 개"
          ></Input>
        </Field>
        <Field cols={2} width={["100px", "auto"]}>
          <span>유효기한</span>
          <Input
            type="text"
            onChange={setExpiredPeriod}
            placeholder="쿠폰 발행후 유효기간 (기본값: 무제한)"
          ></Input>
        </Field>
        <Field cols={2} width={["100px", "auto"]}>
          <span>최소 구매금액</span>
          <Input
            type="text"
            onChange={setMinPurchase}
            placeholder="쿠폰 적용가능한 구매 최소금액 (기본값: 최소금액없음)"
          ></Input>
        </Field>
        <Field cols={2} width={["100px", "auto"]}>
          <span>최대 할인액</span>
          <Input
            type="text"
            onChange={setMaxDiscountCost}
            placeholder="할인 가능한 최대금액 (기본값: 제한없음)"
          ></Input>
        </Field>
      </Container>
    </Modal>
  );
}

const Input = styled.input`
  margin: 0;
  max-width: 100%;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  outline: 0;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  text-align: left;
  line-height: 1.21428571em;
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  padding: 0.67857143em 1em;
  background: #fff;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  -webkit-transition: border-color 0.1s ease, -webkit-box-shadow 0.1s ease;
  transition: border-color 0.1s ease, -webkit-box-shadow 0.1s ease;
  transition: box-shadow 0.1s ease, border-color 0.1s ease;
  transition: box-shadow 0.1s ease, border-color 0.1s ease,
    -webkit-box-shadow 0.1s ease;
  -webkit-box-shadow: none;
  box-shadow: none;
`;

export default CouponCreate;
