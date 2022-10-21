import styled from "styled-components";
import { motion } from "framer-motion";

export const CardWrapper = styled(motion.div)`
  --card-color: var(--yellow);

  width: 100%;
  height: auto;
  padding: 15px;
  border-radius: 2px;

  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;

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
  width: 100%;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  padding: 8px 0;

  h2 {
    font-weight: 700;
    font-size: 22px;
  }

  .category_price {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      font-size: 14px;
    }
    h5 {
      color: #404040;
      padding: 6px 12px;
      border-radius: 2px;
      font-size: 16px;
      font-weight: 700;
      background: var(--card-color);
    }
  }
`;
