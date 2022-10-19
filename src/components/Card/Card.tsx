import React from "react";
import type Cat from "interfaces/cat";
import { CardWrapper, CatInfo, ImageWrapper } from "./styles";

interface CardProps {
  cat: Cat;
}

const Card: React.FC<CardProps> = ({ cat }) => {
  if (!cat) return null;

  return (
    <CardWrapper data-type={cat.category}>
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
