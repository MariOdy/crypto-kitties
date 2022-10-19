import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

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

export const StyledOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  inset: 0;

  &[data-state="closed"] {
    opacity: 0;
    pointer-events: none !important;
  }
`;

export const StyledContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: none;
  width: fit-content;

  &[data-state="closed"] {
    opacity: 0;
    pointer-events: none !important;
  }
`;
