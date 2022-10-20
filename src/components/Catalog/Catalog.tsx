import React from "react";
import useCryptoKitties from "utils/useCryptoKitties";
import { CatalogWrapper } from "./styles";

import SortBar from "components/SortBar/SortBar";
import CardsView from "components/CardsView/CardsView";

const Catalog: React.FC = () => {
  const { cats, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useCryptoKitties();

  return (
    <CatalogWrapper>
      <SortBar />
      <CardsView
        cats={cats}
        isLoading={isFetchingNextPage}
        hasMore={hasNextPage}
        fetchMoreData={fetchNextPage}
      />
    </CatalogWrapper>
  );
};

export default Catalog;
