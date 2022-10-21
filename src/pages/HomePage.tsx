import React from "react";
import Catalog from "components/Catalog";
import MainLayout from "layouts/MainLayout";

const HomePage: React.FC = () => (
  <MainLayout>
    <Catalog />
  </MainLayout>
);

export default React.memo(HomePage);
