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
    img: StaticImageData;
    chips: string[];
  }[];
  className?: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 md:gap-14">
      {items.map((item, index) => (
        <Card
          className={cn("max-w-[900px] min-h-[500px] z-20 gap-4", className)}
        >
          <CardHeader className="flex flex-row w-full h-full justify-between">
            <div className="text-sm gap-3 text-default-500 flex">
              {item.chips.map((e, i) => (
                <p key={i} className="flex items-center justify-center gap-1"> <div className= {`w-3 h-3 rounded-full bg-red-500`} />{e}</p>
              ))}
            </div>
            <p className="text-sm text-default-500 text-end flex justify-end">
              {item.date}
            </p>
          </CardHeader>
          <CardBody className="gap-5">
            <p className="text-lg">{item.title}</p>
            <p className="text-lg text-default-500">{item.description}</p>
          </CardBody>
          <CardFooter>
            <Image src={item.img} alt={"Image"}></Image>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
