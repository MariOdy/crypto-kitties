import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import { CardWrapper, CatInfo, ImageWrapper } from "components/Card/styles";

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
    padding: 26px;
  }

  & ${ImageWrapper} {
    width: 400px;
    height: 400px;
  }
  & ${CatInfo} {
    h2 {
      font-size: 44px;
    }
    h4 {
      font-size: 28px;
    }
    h5 {
      padding: 12px 24px;
      font-size: 32px;
    }
  }

  &[data-state="closed"] {
    opacity: 0;
    pointer-events: none !important;
  }
`;