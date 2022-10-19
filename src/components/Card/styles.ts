import styled from "styled-components";
import { motion } from "framer-motion";

export const CardWrapper = styled(motion.div)`
  --card-color: var(--yellow);

  width: fit-content;
  height: auto;
  padding: 15px;
  border-radius: 2px;

  background-color: #ffffff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

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
  width: 200px;
  height: 200px;
  border-radius: 2px;

  background: var(--card-color);

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const CatInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;

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
