import React, { useCallback } from "react";
import type Cat from "interfaces/cat";
import { CardWrapper, CatInfo, ImageWrapper } from "./styles";

interface CardProps {
  cat: Cat;
  onClick?: (cat: Cat) => void;
}

const Card: React.FC<CardProps> = ({ cat, onClick }) => {
  const handleClick = useCallback(() => onClick?.(cat), [cat]);

  if (!cat) return null;

  const { id, name, image_url, category, price } = cat;

  return (
    <CardWrapper
      data-type={category}
      layoutId={String(id)}
      onClick={handleClick}
    >
      <ImageWrapper>
        <img src={image_url} alt={name} loading="lazy" />
      </ImageWrapper>
      <CatInfo>
        <h2>{name}</h2>
        <div className="category_price">
          <h4>{category}</h4>
          <h5>${price}</h5>
        </div>
      </CatInfo>
    </CardWrapper>
  );
};

export default React.memo(Card);
