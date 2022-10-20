import React from "react";
import {
  RadioGroupStyled,
  RadioItemStyled,
  SortBarWrapper,
  SortType,
} from "./styles";
import { IoChevronUp } from "react-icons/io5";
import { SortableDirection, SortableProps } from "utils/useCryptoKitties";

interface SortBarProps {
  sortType: SortableProps;
  sortDirection: SortableDirection;
  setSorting: (type: SortableProps, direction: SortableDirection) => void;
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
  const handleValueChange = (value: SortableProps) => setSorting(value, "asc");

  return (
    <SortBarWrapper>
      <SortType>
        <RadioGroupStyled value={sortType} onValueChange={handleValueChange}>
          {sortByArr.map(({ label, value }) => (
            <RadioItemStyled
              value={value}
              key={value}
              onClick={() => {
                if (sortType === value)
                  setSorting(value, sortDirection === "asc" ? "desc" : "asc");
              }}
            >
              {label}
              <IoChevronUp />
            </RadioItemStyled>
          ))}
        </RadioGroupStyled>
      </SortType>
    </SortBarWrapper>
  );
};

export default SortBar;
