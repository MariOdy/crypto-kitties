import React, { useState } from "react";
import type Cat from "interfaces/cat";
import CardsGrid from "components/CardsGrid";
import InViewTrigger from "components/InViewTrigger";
import { CardsViewWrapper } from "./styles";
import CardPreview from "./CardPreview";

interface CardsViewProps {
  cats: Cat[] | null;
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
    <>
      <CardsViewWrapper>
        <CardsGrid cats={cats} onClick={setSelectedCat} />
        {isLoading && <div>Loading...</div>}
        {hasMore && fetchMoreData && (
          <InViewTrigger onInView={fetchMoreData} active={!isLoading} />
        )}
      </CardsViewWrapper>

      <CardPreview cat={selectedCat} onClose={onClose} />
    </>
  );
};

export default CardsView;
