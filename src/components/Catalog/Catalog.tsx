import React from "react";
import Card from "components/Card";
import useCryptoKitties from "utils/useCryptoKitties";
import { CatalogWrapper, KittiesList, SortBar } from "./styles";

const Catalog: React.FC = () => {
  const { cats, isLoading } = useCryptoKitties();

  return (
    <CatalogWrapper>
      {isLoading && <div>Loading...</div>}
      <SortBar>sort nav</SortBar>
      <KittiesList>
        {cats?.map((cat) => (
          <Card key={cat.id} cat={cat}  />
        ))}
      </KittiesList>
    </CatalogWrapper>
  );
};

export default Catalog;
