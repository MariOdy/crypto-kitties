import styled, { keyframes } from "styled-components";

const roll = keyframes`
  0% {
    transform: translateX(-200%) rotate(0deg) ;
  }
  100% {
    transform:  translateX(200%) rotate(360deg);
  }
`;

export const LoaderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 70vh;
  width: 100%;

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
