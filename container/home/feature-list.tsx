"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

export type Feature = {
  emoji: string;
  title: string;
  description: string;
};

interface FeatureListProps {
  features: Feature[];
  dynamicFontIndexes?: number[];
  dynamicColorIndexes?: number[];
}

export const FeatureList: React.FC<FeatureListProps> = ({
  features,
  dynamicFontIndexes = [],
  dynamicColorIndexes = [],
}) => {
  const fonts = [
    "font-serif",
    "font-sans",
    "font-mono",
    "font-cursive",
    "font-extrabold",
  ];

  const colors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
  ];

  const [currentFont, setCurrentFont] = useState<string>(fonts[0] || "");
  const [currentColor, setCurrentColor] = useState<string>(colors[0] || "");

  useEffect(() => {
    const fontInterval = setInterval(() => {
      setCurrentFont((prevFont) => {
        const currentIndex = fonts.indexOf(prevFont);
        return fonts[(currentIndex + 1) % fonts.length];
      });
    }, 5000);

    return () => clearInterval(fontInterval);
  }, [fonts]);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setCurrentColor((prevColor) => {
        const currentIndex = colors.indexOf(prevColor);
        return colors[(currentIndex + 1) % colors.length];
      });
    }, 5000);

    return () => clearInterval(colorInterval);
  }, [colors]);

  return (
    <div>
      {features.map((feature, i) => (
        <div
          className="items-top animateScroll flex space-x-2 text-left"
          key={i * 4}
        >
          <Icons.selected size={20} className="hidden" />
          <div className="grid gap-1.5 leading-none" key={i}>
            <label
              htmlFor={feature.title}
              className={cn(
                "text-base font-medium leading-none",
                dynamicFontIndexes.includes(i) ? currentFont : "",
                dynamicColorIndexes.includes(i) ? currentColor : ""
              )}
            >
              {feature.emoji} {feature.title}
            </label>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
