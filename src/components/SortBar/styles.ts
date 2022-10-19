import styled from "styled-components";

export const SortBarWrapper = styled.div`
  width: 70%;
  height: fit-content;
  padding: 12px 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;

  border: 1px solid red;

  >div{
    width: 30%;
    height: fit-content;
    border-radius: 2px;
    padding: 8px 20px;
    background-color: gray;
    text-align: center;
  }
`;
