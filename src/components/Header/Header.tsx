import React from "react";
import { HeaderWrapper, Logo } from "./styles";

const Header: React.FC = () => (
  <HeaderWrapper>
    <Logo href="/">CryptoKitties</Logo>
  </HeaderWrapper>
);

export default React.memo(Header);
