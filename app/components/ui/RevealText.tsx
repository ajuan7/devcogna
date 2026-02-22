"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
  delay?: number; // seconds
  duration?: number; // seconds
  className?: string;
};

export default function RevealText({
  children,
  delay = 0,
  duration = 0.8,
  className,
}: Props) {
  return (
    <span
      className={`reveal-text inline-block ${className ?? ""}`}
      style={
        {
          ["--rt-delay" as any]: `${delay}s`,
          ["--rt-duration" as any]: `${duration}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </span>
  );
}