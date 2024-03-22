import React from "react";
import { styled } from "styled-components";
import SidebarComponent from "./Sidebar";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const MainLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 60px 1fr;
`;

const Sidebar = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-right: 1px solid gray;
  grid-column: 1/2;
  grid-row: 1/3;
`;
const Navtab = styled.nav`
  display: flex;
  grid-column: 2/3;
  grid-row: 1/2;
`;
const Container = styled.div`
  padding: 2rem;
`;

const Layout = () => {
  return (
    <MainLayout>
      <Navtab>
        <Nav />
      </Navtab>

      <SidebarComponent />

      <Container>
        <Outlet />
      </Container>
    </MainLayout>
  );
};

export default Layout;
