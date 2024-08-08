import React from "react";
import SectionHeading from "./layout/SectionHeading";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Image } from "@nextui-org/react";

const MySite = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center ">
      <SectionHeading
        title="MY SITE"
        subtitle="My site is a playful sandbox. Explore, experiment, and say hello"
      />
      <BentoGrid className="grid-cols-1 md:grid-cols-4 ">
        <BentoGridItem className="gap-5 text-center w-full h-full md:col-span-2 md:row-span-2">
          <div className="absolute flex flex-row h-full w-full border border-emerald-500">
            <div className="w-[50%] h-[80%] border border-red-500 overflow-hidden inset-0">
            <Image src="/me-fly.jpg" alt="me" />
            </div>
            <div className="w-[50%] h-[80%] grid place-items-center border border-red-500 overflow-hidden inset-0">
            <Image src="/me-bro.jpg" alt="me" className="h-full w-full object-cover"  />
            </div>
            <div className="w-[50%] h-[80%] border border-red-500 overflow-hidden inset-0">
            <Image src="/me-speech.jpg" alt="me" />
            </div>
          </div>
          {/* <div className="w-full h-full flex flex-col text-start gap-3 text-foreground max-w-[60%]">
            <h3 className="text-xl">Toolbox</h3>
            <p className="text-sm text-foreground/80">
              Check out my favorite tools and spots around the web.
            </p>
          </div> */}
        </BentoGridItem>
        <BentoGridItem className="flex flex-col items-center justify-center gap-5 text-center w-full h-full md:col-span-2 md:row-span-1">
          <div className="w-full h-full flex flex-col text-start gap-3 text-foreground max-w-[60%]">
            <h3 className="text-xl">Toolbox</h3>
            <p className="text-sm text-foreground/80">
              Check out my favorite tools and spots around the web.
            </p>
          </div>
        </BentoGridItem>
        <BentoGridItem className="flex flex-col items-center justify-center gap-5 text-center w-full h-full md:col-span-2 md:row-span-1">
          <div className="w-full h-full flex flex-col text-start gap-3 text-foreground max-w-[60%]">
            <h3 className="text-xl">Toolbox</h3>
            <p className="text-sm text-foreground/80">
              Check out my favorite tools and spots around the web.
            </p>
          </div>
        </BentoGridItem>
      </BentoGrid>
    </section>
  );
};

export default MySite;
