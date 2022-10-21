import styled, { keyframes } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import { CardWrapper } from "components/Card/styles";

export const CardsViewWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const roll = keyframes`
  0% {
      transform: translateX(-200%) rotate(0deg) ;
    }
    100% {
      transform:  translateX(200%) rotate(360deg);
    }
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  & .loader {
    width: 70px;
    height: 70px;
    background: conic-gradient(
      from 180deg at 50% 50%,
      #bae9bc 0deg,
      #afd7ee 89.28deg,
      #eebdec 180.34deg,
      #f8e5b6 272.73deg,
      #bae9bc 360deg
    );
    border-radius: 50%;
    position: relative;
    animation: ${roll} 0.8s ease-in-out infinite alternate;

    &:after {
      content: "";
      position: absolute;
      inset: 5px;
      border-radius: 50%;
      border: 5px solid;
      border-color: #fff transparent;
    }
  }
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
