import CardsGrid from "components/CardsGrid";
import InViewTrigger from "components/InViewTrigger";
import Cat from "interfaces/cat";
import React from "react";
import { CardsViewWrapper } from "./styles";

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
}) => (
  <CardsViewWrapper>
    <CardsGrid cats={cats} />
    {isLoading && <div>Loading...</div>}
    {hasMore && fetchMoreData && (
      <InViewTrigger onInView={fetchMoreData} active={!isLoading} />
    )}
  </CardsViewWrapper>
);

export default CardsView;
