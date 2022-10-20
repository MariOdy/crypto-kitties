import Catalog from "components/Catalog";
import Header from "components/Header/Header";
import React from "react";
import { HomePageWrapper } from "./styles";

const HomePage: React.FC = () => {
  return (
    <HomePageWrapper>
      <Header />
      <Catalog />
    </HomePageWrapper>
  );
};

export default HomePage;
