"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  chatGPT,
  framer,
  obsidian,
  spotify,
  vscode,
  drive,
} from "@/public/images";
import Image from "next/image";
import { Link } from "@nextui-org/react";
import { HoverEffect } from "@/components/ui/cardHoverEffect";
import { projects } from "@/lib/config";

const ToolboxPage = () => {
  return (
    <div className="mt-7">
      <p className="text-4xl font-light grid place-content-center ">
        Applications
      </p>
      <div className="mt-14">
        <BentoGrid className="md:max-w-4xl w-full mx-auto grid-rows-4 md:grid-rows-2 grid-cols-2 md:grid-cols-4 md:gap-7">
          <BentoGridItem
            className={
              "relative w-full h-full flex gap-2 items-center justify-center flex-col p-5"
            }
            noNoise
          >
            <Link
              isExternal
              href={`https://obsidian.md/`}
              className="flex justify-center flex-col"
              color="foreground"
            >
              <Image src={obsidian} alt="Obsidian Logo" className="size-28" />
              <p className="text-xl z-10 ">Obsidian</p>
            </Link>
          </BentoGridItem>
          <BentoGridItem
            className={
              "relative w-full h-full flex gap-2 items-center justify-center flex-col p-5"
            }
            noNoise
          >
            <Link
              isExternal
              href={`https://code.visualstudio.com/`}
              className="flex justify-center flex-col"
              color="foreground"
            >
              <Image src={vscode} alt="VSCode Logo" className="size-28" />
              <p className="text-xl z-10 flex justify-center">VSCode</p>
            </Link>
          </BentoGridItem>
          <BentoGridItem
            className={
              "relative w-full h-full flex gap-2 items-center justify-center flex-col p-5"
            }
            noNoise
          >
            <Link
              isExternal
              href={`https://www.framer.com/`}
              className="flex justify-center flex-col"
              color="foreground"
            >
              <Image src={framer} alt="Framer Logo" className="size-28" />
              <p className="text-xl z-10 flex justify-center">Framer</p>
            </Link>
          </BentoGridItem>
          <BentoGridItem
            className={
              "relative w-full h-full flex gap-2 items-center justify-center flex-col p-5"
            }
            noNoise
          >
            <Link
              isExternal
              href={`https://open.spotify.com/`}
              className="flex justify-center flex-col"
              color="foreground"
            >
              <Image src={spotify} alt="Spotify Logo" className="size-28" />
              <p className="text-xl z-10 flex justify-center">Spotify</p>
            </Link>
          </BentoGridItem>

          <BentoGridItem
            className={
              "relative w-full h-full flex gap-2 items-center justify-center flex-col p-5"
            }
            noNoise
          >
            <Link
              isExternal
              href={`https://openai.com/`}
              className="flex justify-center flex-col"
              color="foreground"
            >
              <Image src={chatGPT} alt="ChatGPT Logo" className="size-28" />
              <p className="text-xl z-10 flex justify-center">ChatGPT</p>
            </Link>
          </BentoGridItem>
          <BentoGridItem
            className={
              "relative w-full h-full flex gap-2 items-center justify-center flex-col p-5"
            }
            noNoise
          >
            <Link
              isExternal
              href={`https://drive.google.com/`}
              className="flex justify-center flex-col"
              color="foreground"
            >
              <Image src={drive} alt="Google Drive Logo" className="size-28" />
              <p className="text-xl z-10 flex justify-center">Google Drive</p>
            </Link>
          </BentoGridItem>
        </BentoGrid>
      </div>
      <p className="text-4xl mt-28 font-light grid place-content-center ">
        Hardware
      </p>
        <div className="max-w-5xl mx-auto px-8 mt-5">
          <HoverEffect items={projects} />
        </div>
    </div>
  );
};

export default ToolboxPage;