import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Navbar from "../../components/Navbar";
import CouponPage from "../CouponPage";
import CouponLogPage from "../CouponLogPage";

function Home() {
  return (
    <LayoutWrapper>
      <Navbar />
      <Contents>
        <Switch>
          <Route path="/coupon/manage" component={CouponPage} />
          <Route path="/coupon/log" component={CouponLogPage} />
        </Switch>
      </Contents>
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100%;
`;

const Contents = styled.div`
  width: 100%;
`;

export default Home;
