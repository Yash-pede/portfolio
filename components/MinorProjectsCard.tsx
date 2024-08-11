import { cn } from "@/lib/utils";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const MinorEffect = ({
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 py-10">
      {items.map((item, index) => (
        <Card
          key={index}
          className={cn(
            "relative group gap-3 block p-2 h-full w-[90%]] bg-transparent",
            className
          )}
        >
          <CardHeader className="flex gap-3">
            <Link href={item.link}>
              <Image
                src={item.src}
                className="flex gap-2 md:gap-3"
                alt="Image"
              />
            </Link>
          </CardHeader>
          <CardBody className="gap-5">
            <p className="text-xl md:text-xl text-foreground font-semibold">
              {item.title}
            </p>
            <p className="text-lg md:text-lg text-slate-300">{item.description}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
