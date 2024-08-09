import { cn } from "@/lib/utils";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    src: any;
    link: string;
  }[];
  className?: string;
}) => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center gap-20 md:gap-40">
      {items.map((item, index) => (
        <Card
          key={index}
          className={cn(
            "md:w-[900px] gap-2 md:gap-3 bg-transparent border-none shadow-none text-default-600",
            className
          )}
        >
          <CardHeader className="flex flex-col justify-start items-start md:flex-row w-full h-full md:justify-between gap-2">
            <Link href={item.link}>
              <Image
                src={item.src}
                className="flex gap-2 md:gap-3"
                alt="Image"
              />
            </Link>
          </CardHeader>
          <CardBody className="gap-5">
            <p className="text-xl md:text-2xl text-foreground font-semibold">
              {item.title}
            </p>
            <p className="text-lg md:text-xl">{item.description}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
