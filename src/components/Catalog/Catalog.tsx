import React, { useState } from "react";
import Card from "components/Card";
import useCryptoKitties from "utils/useCryptoKitties";
import * as Dialog from "@radix-ui/react-dialog";
import Tilt from "react-parallax-tilt";
import {
  CatalogWrapper,
  KittiesList,
  SortBar,
  StyledContent,
  StyledOverlay,
} from "./styles";
import type Cat from "interfaces/cat";
import { AnimatePresence } from "framer-motion";

const Catalog: React.FC = () => {
  const { cats, isLoading } = useCryptoKitties();
  const [selectedCat, setSelectedCat] = useState<Cat | null>(null);

  const onClose = () => setSelectedCat(null);

  return (
    <Dialog.Root open={!!selectedCat} onOpenChange={onClose}>
      <CatalogWrapper>
        {isLoading && <div>Loading...</div>}
        <SortBar>sort nav</SortBar>
        <KittiesList>
          {cats?.map((cat) => (
            <li key={cat.id}>
              <Card cat={cat} onClick={setSelectedCat} />
            </li>
          ))}
        </KittiesList>
      </CatalogWrapper>

      <AnimatePresence>
        <Dialog.Portal forceMount>
          {selectedCat && (
            <>
              <StyledOverlay />
              <StyledContent>
                <Tilt>
                  <Card cat={selectedCat} />
                </Tilt>
              </StyledContent>
            </>
          )}
        </Dialog.Portal>
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default Catalog;
