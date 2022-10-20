import React from "react";
import {
  RadioGroupStyled,
  RadioItemStyled,
  SortBarWrapper,
  SortType,
} from "./styles";
import { IoChevronUp } from "react-icons/io5";

const sortByArr = [
  { value: "name", label: "Name" },
  { value: "price", label: "Price" },
  { value: "category", label: "Category" },
];

const Sort: React.FC = () => {
  return (
    <SortType>
      <RadioGroupStyled>
        {sortByArr.map(({ label, value }) => (
          <RadioItemStyled value={value} key={value}>
            {label}
            <IoChevronUp />
          </RadioItemStyled>
        ))}
      </RadioGroupStyled>
    </SortType>
  );
};

const SortBar: React.FC = () => {
  return (
    <SortBarWrapper>
      <Sort />
    </SortBarWrapper>
  );
};

export default SortBar;
