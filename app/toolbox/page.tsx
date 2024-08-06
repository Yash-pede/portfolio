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
            <Image src={obsidian} alt="Obsidian Logo" className="size-28" />
            <p className="text-xl z-10">Obsidian</p>
          </BentoGridItem>
        </BentoGrid>
      </div>
    </div>
  );
};

export default ToolboxPage;

const items: {
  content?: React.ReactNode;
}[] = [
  {
    content: (
      <div className="">
        <Image src={obsidian} alt="Obsidian Logo" className="size-28" />
        <p className="text-xl z-10">Obsidian</p>
      </div>
    ),
  },
  {
    content: (
      <div className="">
        <Image src={vscode} alt="VSCode Logo" className="size-28" />
        <p className="text-xl z-10">VSCode</p>
      </div>
    ),
  },
  {
    content: (
      <div className="">
        <Image src={framer} alt="Framer Logo" className="size-28" />
        <p className="text-xl z-10">Framer</p>
      </div>
    ),
  },
  {
    content: (
      <div className="flex flex-col items-center justify-center pt-3">
        <Image src={spotify} alt="Spotify Logo" className="size-28" />
        <p className="text-xl z-10">Spotify</p>
      </div>
    ),
  },
  {
    content: (
      <div className="">
        <Image src={chatGPT} alt="ChatGPT Logo" className="size-28" />
        <p className="text-xl z-10">ChatGPT</p>
      </div>
    ),
  },
  {
    content: (
      <div className="flex flex-col items-center justify-center pt-3">
        <Image src={drive} alt="Google Drive Logo Logo" className="size-28" />
        <p className="text-xl z-10">Google Drive</p>
      </div>
    ),
  },
];
