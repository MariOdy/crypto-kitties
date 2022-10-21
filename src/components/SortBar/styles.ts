import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const SortBarWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 8px;
  padding-bottom: 14px;
  overflow: auto;
  width: 100%;

  border-bottom: 2px solid transparent;
  border-image: linear-gradient(
    to bottom right,
    #b827fc 0%,
    #2c90fc 25%,
    #b8fd33 50%,
    #fec837 75%,
    #fd1892 100%
  );
  border-image-slice: 1;

  /* For tablets and phones */
  @media (max-width: 570px) {
    justify-content: center;
  }

  /* For  Galaxy Fold screens*/
  @media (max-width: 335px) {
    justify-content: flex-start;
  }
`;

export const SortType = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const RadioGroupStyled = styled(RadioGroup.Root)`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const RadioItemStyled = styled(RadioGroup.Item)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  gap: 6px;
  border: none;

  color: #4a4a4a;
  background-color: transparent;
  border-radius: 20px;
  text-transform: uppercase;
  font-size: 90%;
  font-weight: 700;
  cursor: pointer;

  &[data-state="checked"] {
    border: 1px solid #d3d3d3;
  }
  &[data-state="unchecked"] svg {
    display: none;
  }
`;
