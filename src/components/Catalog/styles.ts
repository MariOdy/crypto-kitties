import styled from "styled-components";

export const CatalogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 90%;
  margin: 30px auto;
`;

export const SortBar = styled.nav`
  width: 100%;
  height: 40px;
  
  


  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const KittiesList = styled.ul`
  width: 100%;
  display: grid;
  justify-items: center;
  padding: 16px;
  row-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
`;
