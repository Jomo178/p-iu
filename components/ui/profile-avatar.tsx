"use client";

import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

import { Typography } from "./typography";

interface ProfileAvatarProps extends VariantProps<typeof avatarVariants> {
  src: string;
  alt: string;
  name: string;
  reverse?: boolean;
  className?: string;
}

const avatarVariants = cva("flex items-center gap-2", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    reverse: {
      true: "flex-row-reverse",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    reverse: false,
  },
});

export default function ProfileAvatar({
  src,
  alt,
  name,
  size,
  reverse,
  className,
}: ProfileAvatarProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn(avatarVariants({ size, reverse }), className)}>
      <div className="relative">
        <Avatar
          className={cn(isLoaded ? "" : "hidden", avatarVariants({ size }))}
        >
          <AvatarImage
            src={src}
            alt={alt}
            onLoadingStatusChange={(status) => {
              if (status === "loaded") setIsLoaded(true);
            }}
          />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        {!isLoaded && (
          <Skeleton
            className={cn(
              "absolute inset-0 rounded-full",
              avatarVariants({ size })
            )}
          />
        )}
      </div>
      <Typography variant="large" className={cn(avatarVariants({ size }))}>
        {name}
      </Typography>
    </div>
  );
}
