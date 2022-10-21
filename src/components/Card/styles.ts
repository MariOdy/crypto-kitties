import styled from "styled-components";
import { motion } from "framer-motion";

export const CardWrapper = styled(motion.div)`
  --card-color: var(--yellow);

  border-radius: 2px;
  cursor: pointer;
  height: 100%;
  padding: 15px;
  width: 100%;

  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &[data-type="middle"] {
    --card-color: var(--yellow);
  }
  &[data-type="sub-zero"] {
    --card-color: var(--blue);
  }
  &[data-type="fast"] {
    --card-color: var(--green);
  }
  &[data-type="slow"] {
    --card-color: var(--pink);
  }
`;

export const ImageWrapper = styled.div`
  aspect-ratio: 1/1;
  border-radius: 2px;

  background: var(--card-color);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;

export const CatInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  padding: 8px 0;
  width: 100%;

  h2 {
    font-weight: 700;
    font-size: 22px;
  }

  .category_price {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;

    h4 {
      font-size: 14px;
    }

    h5 {
      background: var(--card-color);
      border-radius: 2px;
      color: #404040;
      font-size: 16px;
      font-weight: 700;
      padding: 6px 12px;
    }
  }
`;
