import React from "react";
import styled from "styled-components";
const NavContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 1rem;
  justify-content: flex-end;
`;
const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
`;

const Nav = () => {
  return (
    <NavContainer>
      <NavList>
        <li>Cześć Kolego</li>
        <li>Ustawienia</li>
        <li>Wyloguj</li>
      </NavList>
    </NavContainer>
  );
};

export default Nav;
