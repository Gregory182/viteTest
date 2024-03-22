import React, { useState } from "react";
import styled from "styled-components";
import { routeLinks } from "../../Links";
import { Link } from "react-router-dom";

const Header = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
`;

const Devider = styled.div`
  width: 80%;
  height: 1px;
  background-color: lightgray;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-right: 1px solid gray;
  grid-column: 1/2;
  grid-row: 1/3;
  /* transform: translateX(${(props) =>
    props.isCollapsed ? "-60px" : "50px"}); */
  /* width: ${(props) => (props.isCollapsed ? "100px" : "300px")}; */
`;

const Links = styled.div`
  margin: 2rem 0rem;
`;

const SidebarComponent = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <NavContainer isCollapsed={isCollapsed}>
      <Header>
        <div>
          <h2>GR</h2>
        </div>
        <div onClick={() => setIsCollapsed(!isCollapsed)}>X</div>
      </Header>
      <Devider />
      <Links>{routeLinks.map(item => {
        return (
          <div key={item.id}>
            <Link to={item.url}>{item.description}</Link>
          </div>
        )
      })}</Links>
    </NavContainer>
  );
};

export default SidebarComponent;
