import React from "react";
import type Cat from "interfaces/cat";
import { KittiesList } from "./styles";
import Card from "components/Card/Card";

interface CardsGridProps {
  cats: Cat[] | undefined;
  onClick?: (cat: Cat) => void;
}

const CardsGrid: React.FC<CardsGridProps> = ({ cats, onClick }) => {
  if (!Array.isArray(cats) || cats.length === 0) return null;

  return (
    <KittiesList>
      {cats.map((cat) => (
        <li key={cat.id}>
          <Card cat={cat} onClick={onClick} />
        </li>
      ))}
    </KittiesList>
  );
};

export default CardsGrid;
