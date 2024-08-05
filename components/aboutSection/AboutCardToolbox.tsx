import Image from "next/image";
import { Globe } from "../ui/CobeGlobe";
import { notion, obsidian, vscode, warp } from "@/public/images";

export const AboutCardToolbox = () => {
  return (
    <div className="relative w-full h-full flex justify-start items-start p-4 md:p-6 group">
      <div className="w-full h-full flex flex-col text-start gap-3 text-foreground max-w-[60%]">
        <h3 className="text-xl">Toolbox</h3>
        <p className="text-sm text-foreground/80">
          Check out my favorite tools and spots around the web.
        </p>
      </div>
      <div className="absolute -right-[20%] -bottom-[25%] flex flex-none justify-center items-center overflow-visible w-full h-full">
        {tools.map((tool, index) => {
          const startAngle = 170;
          const endAngle = 280;
          const angleRange = endAngle - startAngle;
          const angleStep = angleRange / (4 - 1) ; // 4 dots, hence 3 gaps
          const angle = startAngle + (index * angleStep); // Calculate angle for each dot
          
          const rad = (angle * Math.PI) / 180;
          const radius = 220; // Adjust radius to increase the circle size
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);
          return (
            <Image
              key={index}
              src={tool.src}
              alt="tool"
              className="absolute w-10 h-10 group-hover:w-12 group-hover:h-12 transition-all duration-300 p-2 bg-secondary/30 rounded-medium"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                top: "50%",
                left: "50%",
                transformOrigin: "0 0",
              }}
            />
          );
        })}
      </div>
      <Globe className="hidden md:block md:absolute md:-right-24 md:-bottom-72" />
    </div>
  );
};

const tools = [
  { src: obsidian, angle: 0 },
  { src: vscode, angle: 90 },
  { src: notion, angle: 180 },
  { src: warp, angle: 270 },
];
