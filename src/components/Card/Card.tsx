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

  return (
    <CardWrapper
      data-type={cat.category}
      layoutId={String(cat.id)}
      onClick={handleClick}
    >
      <ImageWrapper>
        <img src={cat.image_url} alt={cat.name} loading="lazy" />
      </ImageWrapper>
      <CatInfo>
        <h2>{cat.name}</h2>
        <div className="category_price">
          <h4>{cat.category}</h4>
          <h5>${cat.price}</h5>
        </div>
      </CatInfo>
    </CardWrapper>
  );
};

export default Card;
