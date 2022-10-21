import styled from "styled-components";

export const HeaderWrapper = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  flex: 1 0;
  margin: 0 auto;
  width: 100%;
`;

export const Logo = styled.a`
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
  animation: move 400s linear infinite;
  text-transform: uppercase;

  font-weight: 700;
  font-size: 7vw;
  font-family: "Dela Gothic One", cursive;
  padding: 5% 2%;

  @keyframes move {
    to {
      background-position: 4500vh;
    }
  }
`;
