import React from "react";
import { LoaderWrapper } from "./styles";

const Loader: React.FC = () => (
  <LoaderWrapper>
    <div className="loader" />
  </LoaderWrapper>
);

export default React.memo(Loader);
