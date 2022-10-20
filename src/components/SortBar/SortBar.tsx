import React from "react";
import {
  RadioGroupStyled,
  RadioItemStyled,
  SortBarWrapper,
  SortType,
} from "./styles";
import { BsChevronExpand } from "react-icons/bs";

const sortByArr = [
  { value: "name", label: "Name" },
  { value: "price", label: "Price" },
];

const Sort: React.FC = () => {
  return (
    <SortType>
      <h3>Sort By:</h3>
      <RadioGroupStyled>
        {sortByArr.map(({ label, value }) => (
          <RadioItemStyled value={value} key={value}>
            {label}
            <BsChevronExpand />
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
