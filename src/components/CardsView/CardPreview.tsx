import React from "react";
import Tilt from "react-parallax-tilt";
import { AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import Card from "components/Card/Card";
import type Cat from "interfaces/cat";
import { StyledContent, StyledOverlay } from "./styles";

interface CardPreviewProps {
  cat: Cat | null;
  onClose: () => void;
}

const CardPreview: React.FC<CardPreviewProps> = ({ cat, onClose }) => (
  <Dialog.Root open={!!cat} onOpenChange={onClose}>
    <AnimatePresence>
      {cat && (
        <Dialog.Portal forceMount>
          <StyledOverlay />
          <StyledContent>
            <Tilt scale={1.2}>
              <Card cat={cat} />
            </Tilt>
          </StyledContent>
        </Dialog.Portal>
      )}
    </AnimatePresence>
  </Dialog.Root>
);

export default React.memo(CardPreview);
