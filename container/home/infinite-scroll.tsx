"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { motion } from "framer-motion";

export interface InfinityScrollItem {
  url: string;
  alt: string;
}

interface InfiniteScrollProps {
  items: InfinityScrollItem[];
}

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ items }) => {
  const [isPaused, setIsPaused] = useState(true);

  return (
    <div className="w-full overflow-hidden py-10">
      <motion.div
        className="flex"
        animate={{
          x: isPaused ? "0%" : "-100%",
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        style={{
          width: `${items.length * 200}px`,
        }}
      >
        {[...items, ...items].map((item, index) => {
          const { attributes, listeners, setNodeRef, transform } = useDraggable(
            {
              id: item.alt,
            }
          );

          const style = {
            transform: CSS.Translate.toString(transform),
          };
          return (
            <div
              key={`${item.alt}-${index}`}
              className="z-10 mx-2 flex-shrink-0 cursor-pointer"
              // onMouseEnter={() => setIsPaused(true)}
              // onMouseLeave={() => setIsPaused(false)}
            >
              <button ref={setNodeRef} {...listeners} {...attributes}>
                <Image
                  key={Math.random()}
                  style={style}
                  src={item.url}
                  alt={item.alt}
                  height={100}
                  width={100}
                  className="h-full w-full rounded-lg object-cover shadow-md transition-transform duration-300 hover:scale-105"
                />
              </button>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
