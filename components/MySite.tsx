"use client";
import React from "react";
import SectionHeading from "./layout/SectionHeading";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { cn } from "@/lib/utils";
import { mySiteImages } from "@/lib/config";
import Image from "next/image";
import { motion } from "framer-motion";

const MySite = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <SectionHeading
        title="MY SITE"
        subtitle="My site is a playful sandbox. Explore, experiment, and say hello"
      />
      <BentoGrid
        className={cn(
          "md:max-w-4xl w-full mx-auto grid-cols-2 md:grid-cols-4 md:gap-7 gap-6"
        )}
      >
        <BentoGridItem className="inset-0 w-full p-7 md:p-3 h-full flex-col gap-3 text-foreground col-span-2 row-span-2">
            <div className="border border-emerald-500 w-full h-full absolute flex items-center justify-center ">
              {mySiteImages.map((image, index) => (
                <div key={index} className="absolute w-20 h-20 inset-0">
                <Image src={image} alt={"image"} className="object-cover" />  
                </div>
              ))}
            </div>
          {/* <div className="flex-col gap-3 text-foreground">
          <h3 className="text-xl">Status</h3>
          <p className="text-sm text-foreground/80">
            A collection of my favorite works
          </p>
          </div> */}
        </BentoGridItem>
        <BentoGridItem className="relative w-full flex items-center justify-center p-7 md:p-10 h-full flex-col gap-3 text-foreground col-span-2">
          <h3 className="text-xl">Status</h3>
          <p className="text-sm text-foreground/80">
            A collection of my favorite works
          </p>
        </BentoGridItem>
        <BentoGridItem className="relative w-full flex items-center justify-center p-7 md:p-10 h-full flex-col gap-3 text-foreground col-span-2">
          <h3 className="text-xl">ChangeLog</h3>
          <p className="text-sm text-foreground/80">
            Here&apos;s what&apos;s new on my site
          </p>
        </BentoGridItem>
      </BentoGrid>
    </div>
  );
};

export default MySite;
