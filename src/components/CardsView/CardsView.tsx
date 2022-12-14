import React, { useCallback, useState } from "react";
import type Cat from "interfaces/cat";
import CardsGrid from "components/CardsGrid";
import InViewTrigger from "components/InViewTrigger";
import Loader from "components/Loader/Loader";
import CardPreview from "./CardPreview";
import { CardsViewWrapper } from "./styles";

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

  const onClose = useCallback(() => setSelectedCat(null), []);

  return (
    <>
      <CardsViewWrapper>
        <CardsGrid cats={cats} onClick={setSelectedCat} />
        {isLoading && <Loader />}
        {hasMore && fetchMoreData && (
          <InViewTrigger onInView={fetchMoreData} active={!isLoading} />
        )}
      </CardsViewWrapper>

      <CardPreview cat={selectedCat} onClose={onClose} />
    </>
  );
};

export default React.memo(CardsView);
