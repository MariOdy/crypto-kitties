import React, { useEffect } from "react";
import { useInView, IntersectionOptions } from "react-intersection-observer";
import { ScrollDetector } from "./styles";

export interface InViewTriggerProps extends IntersectionOptions {
  onInView: () => void;
  active?: boolean;
}

const InViewTrigger: React.FC<InViewTriggerProps> = ({
  onInView,
  active = true,
  rootMargin = "600px",
  ...props
}) => {
  const { ref, inView } = useInView({
    ...props,
    rootMargin,
  });

  useEffect(() => {
    if (inView && active) onInView?.();
  }, [inView, active, onInView]);

  return <ScrollDetector ref={ref} data-scroll-detector />;
};

export default React.memo(InViewTrigger);
