import React from "react";
import styled from "styled-components";
import Header from "components/Header/Header";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
`;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <Wrapper>
    <Header />
    <main>{children}</main>
  </Wrapper>
);

export default React.memo(MainLayout);
