import React from "react";
import { AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import * as Dialog from "@radix-ui/react-dialog";
import Card from "components/Card/Card";
import { StyledContent, StyledOverlay } from "./styles";
import type Cat from "interfaces/cat";

interface CardPreviewProps {
  cat: Cat | null;
  onClose: () => void;
}

const CardPreview: React.FC<CardPreviewProps> = ({ cat, onClose }) => {
  return (
    <Dialog.Root open={!!cat} onOpenChange={onClose}>
      <AnimatePresence>
        <Dialog.Portal forceMount>
          {cat && (
            <>
              <StyledOverlay />
              <StyledContent>
                <Tilt>
                  <Card cat={cat} />
                </Tilt>
              </StyledContent>
            </>
          )}
        </Dialog.Portal>
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default CardPreview;
