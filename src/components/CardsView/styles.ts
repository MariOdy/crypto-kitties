import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import { CardWrapper } from "components/Card/styles";

export const CardsViewWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.7);
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

  & ${CardWrapper} {
    width: 90vw;
    max-width: 320px;
  }

  &[data-state="closed"] {
    opacity: 0;
    pointer-events: none !important;
  }
`;
