import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const SortBarWrapper = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SortType = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  h3 {
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;

  }
`;

export const RadioGroupStyled = styled(RadioGroup.Root)`
  display: flex;
  align-items: center;
  gap: 8px;


`;
export const RadioItemStyled = styled(RadioGroup.Item)`
  display: flex;
  align-items: center;
  padding: 6px 10px;
  gap: 4px;
  border-radius: 20px;
  border: 1px solid #BFBFBF;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;


  /* Styles when selected */
  /* &:hover{
    background-color: #000000;
    color: #FFFFFF;
    border: 1px solid #000000;
  } */


`
