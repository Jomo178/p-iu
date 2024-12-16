"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Issues } from "@prisma/client";
import { GlitchHandle, useGlitch } from "react-powerglitch";

import { botFeatures } from "@/config/features";

import { FeatureList } from "./feature-list";

interface SectionOneProps {
  issues: Issues[];
}

export default function SectionOne({ issues }: SectionOneProps) {
  const links = issues.map((card) => card.image);

  return (
    <div className="container relative mt-10 flex min-h-screen flex-col items-center justify-evenly gap-10 md:flex-row">
      <div className="space-y-10">
        <h1 className="animateScroll scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
          IU Bot Your Bot To Go
        </h1>
        <div>
          <FeatureList features={botFeatures} />
        </div>
      </div>
      <DynamicImageCarousel links={links} />
    </div>
  );
}
interface DynamicImageCarouselProps {
  links: string[];
}

export const DynamicImageCarousel: React.FC<DynamicImageCarouselProps> = ({
  links,
}) => {
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [previousImages, setPreviousImages] = useState<string[]>([]);
  const glitch: GlitchHandle = useGlitch({
    playMode: "always",
    createContainers: true,
    hideOverflow: true,
    timing: {
      duration: 4000,
      iterations: 2,
    },
    glitchTimeSpan: {
      start: 0,
      end: 1,
    },
    shake: {
      velocity: 10,
      amplitudeX: 0.1,
      amplitudeY: 0.1,
    },
    slice: {
      count: 6,
    },
  });

  const selectNewImages = () => {
    const availableImages = links.filter(
      (link) => !previousImages.includes(link)
    );

    const newImages: string[] = [];
    while (newImages.length < 4 && availableImages.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableImages.length);
      newImages.push(availableImages[randomIndex]);
      availableImages.splice(randomIndex, 1);
    }

    setPreviousImages(currentImages);
    setCurrentImages(newImages);
  };

  useEffect(() => {
    selectNewImages();
    const interval = setInterval(() => {
      selectNewImages();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animateScroll grid grid-cols-2 grid-rows-2 gap-4">
      {currentImages.map((src, index) => (
        <div
          className="relative flex h-full w-full items-center justify-center"
          key={index}
        >
          <Image
            key={index}
            src={src}
            alt={`Image ${index}`}
            width={160}
            height={160}
            ref={glitch.ref}
            priority
          />
        </div>
      ))}
    </div>
  );
};
