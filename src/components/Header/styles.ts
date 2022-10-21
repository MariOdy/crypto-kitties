import styled, { keyframes } from "styled-components";

export const HeaderWrapper = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const move = keyframes`
  to {
    background-position: 4500vh;
  }
`;

export const Logo = styled.a`
  animation: ${move} 400s linear infinite;
  background-image: linear-gradient(
    to right,
    #fe7d7d,
    #ffe484,
    #a6f0bf,
    #a6def0,
    #c0b7fa,
    #ff8080
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-weight: 700;
  font-size: 7vw;
  font-family: "Dela Gothic One", cursive;

  padding: 5% 2%;
  text-transform: uppercase;
`;
