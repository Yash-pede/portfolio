"use client";
import { HoverEffect } from "@/components/ChangelogCards";
import { changelog } from "@/lib/config";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
};

const ChangeLogPage = () => {
  return (
    <div>
      <HoverEffect className="flex flex-col" items={changelog} />
    </div>
  );
};

export default ChangeLogPage;
