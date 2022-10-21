import React, { useCallback } from "react";
import type { SortDirection, SortType } from "utils/useCryptoKitties";

const useSorting = () => {
  const [sortType, setSortType] = React.useState<SortType>("name");
  const [sortDirection, setSortDirection] =
    React.useState<SortDirection>("asc");

  const setSorting = useCallback(
    (type: SortType, direction: SortDirection = "asc") => {
      setSortType(type);
      setSortDirection(direction);
    },
    []
  );

  return { sortType, sortDirection, setSorting };
};

export default useSorting;
