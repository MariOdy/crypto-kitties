import styled from "styled-components";

export const KittiesList = styled.ul`
  width: 100%;
  display: grid;
  justify-items: center;
  padding: 16px;
  row-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
`;
