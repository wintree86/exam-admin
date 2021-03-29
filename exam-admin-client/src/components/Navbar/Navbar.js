import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import menu from "./menu";

function Navbar() {
  return (
    <NavbarWrapper>
      <TitleWrapper>
        <Title>ADMIN</Title>
      </TitleWrapper>
      {menu.map((menuItem, idx) => {
        return (
          <MenuPanel key={idx}>
            {menuItem.title}
            <MenuWrapper>
              {menuItem.items.map((item, idx) => (
                <MenuItem key={idx}>
                  <Link to={item.path}>{item.name}</Link>
                </MenuItem>
              ))}
            </MenuWrapper>
          </MenuPanel>
        );
      })}
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  padding: 16px 24px;
  max-width: 180px;
  min-height: 100vh;
  border-right: 1px solid #eaeaea;
`;

const TitleWrapper = styled.div`
  padding: 30px 50px 30px;
`;
const Title = styled.h3`
  font-weight: 400;
`;

const MenuPanel = styled.div`
  padding: 18px 0 0px;
  border-bottom: 1px solid #e5e5e5;
`;
const MenuWrapper = styled.ul``;
const MenuItem = styled.li`
  padding: 5px 0;
`;

export default Navbar;
