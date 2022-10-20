import React, { useState } from "react";
import Card from "components/Card";
import useCryptoKitties from "utils/useCryptoKitties";
import * as Dialog from "@radix-ui/react-dialog";
import Tilt from "react-parallax-tilt";
import { CatalogWrapper, StyledContent, StyledOverlay } from "./styles";
import type Cat from "interfaces/cat";
import { AnimatePresence } from "framer-motion";
import SortBar from "components/SortBar/SortBar";
import CardsView from "components/CardsView/CardsView";

const Catalog: React.FC = () => {
  const { cats, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useCryptoKitties();
  const [selectedCat, setSelectedCat] = useState<Cat | null>(null);

  const onClose = () => setSelectedCat(null);

  return (
    <Dialog.Root open={!!selectedCat} onOpenChange={onClose}>
      <CatalogWrapper>
        <SortBar />
        <CardsView
          cats={cats}
          isLoading={isFetchingNextPage}
          hasMore={hasNextPage}
          fetchMoreData={fetchNextPage}
        />
      </CatalogWrapper>

      {/* Card animation */}
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
