"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { WobbleCard } from "./wobble-card";

export const  BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  content,
}: {
  className?: string;
  content?: React.ReactNode;
}) => {
  return (
    <WobbleCard
      containerClassName={cn(
        "row-span-1 rounded-3xl hover:shadow-xl transition-all duration-1000 dark:border-white/[0.2] bg-foreground/[0.05] dark:bg-secondary  border border-transparent",
        className
      )}
    >
      {content}
    </WobbleCard>
  );
};
