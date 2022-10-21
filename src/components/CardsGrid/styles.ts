import styled from "styled-components";

export const KittiesList = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  margin: 16px 0;
  width: 100%;

  & > li {
    width: 100%;
  }
`;
