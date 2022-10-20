import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

import type Cat from "interfaces/cat";
import CardsGrid from "components/CardsGrid";
import InViewTrigger from "components/InViewTrigger";
import Card from "components/Card";

import { CardsViewWrapper, StyledContent, StyledOverlay } from "./styles";

interface CardsViewProps {
  cats: Cat[] | undefined;
  isLoading?: boolean;
  hasMore?: boolean;
  fetchMoreData?: () => void;
}

const CardsView: React.FC<CardsViewProps> = ({
  cats,
  isLoading = false,
  hasMore = false,
  fetchMoreData,
}) => {
  const [selectedCat, setSelectedCat] = useState<Cat | null>(null);

  const onClose = () => setSelectedCat(null);

  return (
    <Dialog.Root open={!!selectedCat} onOpenChange={onClose}>
      <CardsViewWrapper>
        <CardsGrid cats={cats} onClick={setSelectedCat} />
        {isLoading && <div>Loading...</div>}
        {hasMore && fetchMoreData && (
          <InViewTrigger onInView={fetchMoreData} active={!isLoading} />
        )}
      </CardsViewWrapper>

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

export default CardsView;
