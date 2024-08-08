"use client";
import { HoverEffect } from "@/components/ChangelogCards";
import { changelog } from "@/lib/config";
import React from "react";

const ChanelogPage = () => {
  return (
    <div>
      <HoverEffect className="flex flex-col" items={changelog} />
    </div>
  );
};

export default ChanelogPage;
