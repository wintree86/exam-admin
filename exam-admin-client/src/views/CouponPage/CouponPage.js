import React, { useState } from "react";
import styled from "styled-components";

import { Container, Button } from "../../components/Style";
import { getCouponTypeName } from "../../middleware/utils";
import { COUPON } from "../../constants/const";
import CouponTable from "./CouponTable";
import CouponCreate from "./CouponCreate";

import MockCouponListData from "./dummy";

const CouponListTableColumn = [
  { field: "couponId", name: "Coupon Id" },
  { field: "type", name: "타입" },
  { field: "description", name: "쿠폰정보" },
  { field: "amount", name: "발급 수량" },
  { field: "status", name: "상태" },
  { field: "createdDate", name: "생성일" },
  { field: "updatedDate", name: "수정일" },
];

const getTableData = () => {
  return MockCouponListData.map((data) => {
    return {
      couponId: data.couponId,
      type: data.type,
      amount: data.amount,
      status: data.status,
      createdDate: data.createdDate,
      updatedDate: data.updatedDate,
      description: {
        value: data.value,
        startDate: data.startDate,
        endDate: data.endDate,
        expiredPeriod: data.expiredPeriod,
        minPurchase: data.minPurchase,
        maxDiscountCost: data.maxDiscountCost,
      },
    };
  });
};

function CouponPage() {
  const [showCouponCreateModal, setShowCouponCreateModal] = useState(false);
  const [filter, setFilter] = useState(null);
  const data = getTableData();

  const openModal = () => setShowCouponCreateModal(true);
  const closeModal = () => setShowCouponCreateModal(false);

  const renderFilter = () => {
    const buttons = [
      { name: "전체", filter: null },
      {
        name: getCouponTypeName(COUPON.DISCOUNT_AMOUNT),
        filter: COUPON.DISCOUNT_AMOUNT,
      },
      {
        name: getCouponTypeName(COUPON.DISCOUNT_RATE),
        filter: COUPON.DISCOUNT_RATE,
      },
      {
        name: getCouponTypeName(COUPON.FREE_SHIIPING),
        filter: COUPON.FREE_SHIIPING,
      },
      {
        name: getCouponTypeName(COUPON.TRIAL_MONTH),
        filter: COUPON.TRIAL_MONTH,
      },
    ];

    return buttons.map((button, idx) => (
      <GroupButton
        key={idx}
        onClick={() => setFilter(button.filter)}
        selected={filter === button.filter}
      >
        {button.name}
      </GroupButton>
    ));
  };

  return (
    <Container>
      <HeaderWrapper>
        <PageTitle>쿠폰관리</PageTitle>
        <PageDesc>쿠폰 발급 및 관리 페이지 입니다.</PageDesc>
      </HeaderWrapper>
      <Contents>
        <ActionWrapper>
          <Button onClick={openModal}>새쿠폰 발급</Button>
        </ActionWrapper>

        <CouponListWrapper>
          <GroupButtonWrapper>{renderFilter()}</GroupButtonWrapper>
          <CouponTable
            columns={CouponListTableColumn}
            items={
              filter !== null ? data.filter((d) => d.type === filter) : data
            }
            filter={filter}
          />
        </CouponListWrapper>
      </Contents>

      <CouponCreate isOpen={showCouponCreateModal} onClose={closeModal} />
    </Container>
  );
}

const HeaderWrapper = styled.div``;
const PageTitle = styled.h3`
  font-weight: 400;
`;
const PageDesc = styled.div`
  font-size: 14px;
  color: #999999;
`;
const Contents = styled.div`
  margin: 24px 0;
  text-align: right;
`;
const ActionWrapper = styled.div``;
const CouponListWrapper = styled.div`
  margin-top: 24px;
`;

const GroupButtonWrapper = styled.div`
  display: flex;
`;

const GroupButton = styled.div`
  cursor: pointer;
  margin-right: 5px;
  background-color: ${(props) => (props.selected ? "#F58973" : "#e0e1e2")};
  color: ${(props) => (props.selected ? "#FFF" : "inherit")};
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  :hover {
    background-color: #d1d1d1;
  }
`;

export default CouponPage;
