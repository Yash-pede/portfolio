"use client";
import { HoverEffect } from "@/components/ui/cardHoverEffect";
import { changelog } from "@/lib/config";
import React from "react";

const ChanelogPage = () => {
  return (
    <div>
      <HoverEffect items={changelog} classNamee={"w-full flex flex-col"}/>
    </div>
  );
};

export default ChanelogPage;
