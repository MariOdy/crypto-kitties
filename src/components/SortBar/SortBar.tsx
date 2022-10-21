import React, { useCallback } from "react";
import {
  RadioGroupStyled,
  RadioItemStyled,
  SortBarWrapper,
  SortType,
} from "./styles";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { SortDirection, SortType as ISortType } from "utils/useCryptoKitties";

interface SortBarProps {
  sortType: ISortType;
  sortDirection: SortDirection;
  setSorting: (type: ISortType, direction: SortDirection) => void;
}

const sortByArr = [
  { value: "name", label: "Name" },
  { value: "price", label: "Price" },
  { value: "category", label: "Category" },
];

const SortBar: React.FC<SortBarProps> = ({
  sortType,
  sortDirection,
  setSorting,
}) => {
  const handleValueChange = useCallback(
    (value: ISortType) => setSorting(value, "asc"),
    [setSorting]
  );

  return (
    <SortBarWrapper>
      <SortType>
        <RadioGroupStyled value={sortType} onValueChange={handleValueChange}>
          {sortByArr.map(({ label, value }) => {
            const onClick = () => {
              if (sortType === value)
                setSorting(value, sortDirection === "asc" ? "desc" : "asc");
            };

            return (
              <RadioItemStyled value={value} key={value} onClick={onClick}>
                {label}
                {sortDirection === "asc" ? <FaArrowUp /> : <FaArrowDown />}
              </RadioItemStyled>
            );
          })}
        </RadioGroupStyled>
      </SortType>
    </SortBarWrapper>
  );
};

export default React.memo(SortBar);
