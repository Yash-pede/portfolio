import { chipsColor } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description?: string[];
    date: string;
    img: any;
    chips: string[];
  }[];
  className?: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-20 md:gap-40">
      {items.map((item, index) => (
        <Card
          key={index}
          className={cn(
            "max-w-[900px] min-h-[500px] gap-4 bg-transparent border-none shadow-none text-default-500",
            className
          )}
        >
          <CardHeader className="flex flex-row w-full h-full justify-between">
            <div className="text-sm gap-3 flex">
              {item.chips.map((e, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center gap-1 md:gap-3"
                >
                  <div
                    className={`w-3 h-3 rounded-full`}
                    style={{ backgroundColor: chipsColor[e] }}
                  />
                  {e}
                </div>
              ))}
            </div>
            <p className="text-sm text-end flex justify-end">{item.date}</p>
          </CardHeader>
          <CardBody className="gap-5">
            <p className="text-lg text-foreground font-semibold">
              {item.title}
            </p>
            <p className="text-lg">{item.description}</p>
          </CardBody>
          <CardFooter>
            <Image src={item.img} alt={"Image"} className="w-full h-[50%]"/>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};