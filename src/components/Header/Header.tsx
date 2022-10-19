import React from "react";
import { HeaderWrapper, Logo } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo>CryptoKitties</Logo>
    </HeaderWrapper>
  );
};

export default Header;