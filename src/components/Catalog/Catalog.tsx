import React, { useCallback } from "react";
import useCryptoKitties, {
  SortableDirection,
  SortableProps,
} from "utils/useCryptoKitties";
import { CatalogWrapper } from "./styles";

import SortBar from "components/SortBar/SortBar";
import CardsView from "components/CardsView/CardsView";

const Catalog: React.FC = () => {
  const [sortType, setSortType] = React.useState<SortableProps>("name");
  const [sortDirection, setSortDirection] =
    React.useState<SortableDirection>("asc");

  const setSorting = useCallback(
    (type: SortableProps, direction: SortableDirection = "asc") => {
      setSortType(type);
      setSortDirection(direction);
    },
    []
  );

  const { cats, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useCryptoKitties({sortBy: sortType, sortDir: sortDirection});

  return (
    <CatalogWrapper>
      <SortBar
        sortType={sortType}
        sortDirection={sortDirection}
        setSorting={setSorting}
      />
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
