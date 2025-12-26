"use client";

import React from "react";
import { cn } from "@/lib/utils";

const styleTagContent = `
@keyframes orbit-movement {
  0% { transform: rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg); }
  100% { transform: rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg); }
}
`;

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 0,
  radius = 50,
  path = true,
  iconSize = 30,
}: {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styleTagContent }} />

      {/* 1. The Track Ring */}
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
          style={{ width: "100%", height: "100%" }}
        >
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke="#999"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      )}

      {/* 2. The Rotating Arm */}
      <div
        style={
          {
            "--duration": duration,
            "--radius": radius,
            "--delay": -delay,
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "0px",
            height: "0px",
            animation: "orbit-movement calc(var(--duration) * 1s) linear infinite",
            animationDelay: "calc(var(--delay) * 1s)",
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
        className="flex items-center justify-center"
      >
        {/* The Icon Wrapper - Forced Square & Explicit Radius */}
        <div
          className={cn(
            "flex-none flex items-center justify-center border bg-background/90 shadow-sm", // Added base styles here to ensure consistency
            className
          )}
          style={{
            width: `${iconSize}px`,
            height: `${iconSize}px`,
            minWidth: `${iconSize}px`, // Prevent squishing
            minHeight: `${iconSize}px`, // Prevent squishing
            borderRadius: "12px", // Explicit "squircle" radius (adjust to match your buttons if needed)
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}
