import React from "react";
import useSorting from "utils/useSorting";
import useCryptoKitties from "utils/useCryptoKitties";

import SortBar from "components/SortBar/SortBar";
import CardsView from "components/CardsView/CardsView";

import { CatalogWrapper } from "./styles";

const Catalog: React.FC = () => {
  const { sortType, sortDirection, setSorting } = useSorting();

  const { cats, isFetching, hasNextPage, fetchNextPage } = useCryptoKitties({
    sortBy: sortType,
    sortDir: sortDirection,
  });

  return (
    <CatalogWrapper>
      <SortBar
        sortType={sortType}
        sortDirection={sortDirection}
        setSorting={setSorting}
      />
      <CardsView
        cats={cats}
        isLoading={isFetching}
        hasMore={hasNextPage}
        fetchMoreData={fetchNextPage}
      />
    </CatalogWrapper>
  );
};

export default React.memo(Catalog);
