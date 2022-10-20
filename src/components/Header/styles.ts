import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0;
`;

export const Logo = styled.h2`
  background-image: linear-gradient(
    to right,
    #fe7d7d,
    #ffe484,
    #8cf8ff,
    #ff8080
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: move 800s linear infinite;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 6vw;
  font-family: "Dela Gothic One", cursive;
  padding: 12px;

  @keyframes move {
    to {
      background-position: 4500vh;
    }
  }
`;
