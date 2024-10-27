"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";

import { useWindowSize } from "@/hooks/use-window-size";

export default function Confettis() {
  const { width, height } = useWindowSize();
  const [validSize, setValidSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (width && height && isFinite(width) && isFinite(height)) {
      setValidSize({ width, height });
    }
  }, [width, height]);
  const randNumber = Math.floor(Math.random() * 22) + 1;

  return (
    <Confetti
      className="container"
      width={validSize.width}
      height={validSize.height}
      recycle={false}
      numberOfPieces={349}
      drawShape={(ctx) => {
        ctx.beginPath();
        for (let i = 0; i < randNumber; i++) {
          const angle = 0.35 * i;
          const x = (0.2 + 1.5 * angle) * Math.cos(angle);
          const y = (0.2 + 1.5 * angle) * Math.sin(angle);
          ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.closePath();
      }}
    />
  );
}
