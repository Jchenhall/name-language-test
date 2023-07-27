"use client";
import { useState } from "react";
import PointerGlow from "./components/pointerGlow";
import { WordFlip } from "./components/wordFlip";
import FadingText from "./components/fadingText";


export default function Home() {





  return (
    <main className="relative h-full w-full">
      <PointerGlow />
      <FadingText />
    </main>
  );
}
