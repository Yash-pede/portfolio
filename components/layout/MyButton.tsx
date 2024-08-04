// ButtonC.tsx
import { extendVariants, Button } from "@nextui-org/react";

export const ButtonC = extendVariants(Button, {
  variants: {
    // <- modify/add variants
    color: {
      olive: "text-[#000] bg-[#84cc16]",
      orange: "bg-[#ff8c00] text-[#fff]",
      violet: "bg-[#8b5cf6] text-[#fff] text-bold",
      bright: "bg-white text-primary-foreground",
    },
    radius: {
      small: "rounded-small",
      full: "rounded-full",
    },
    size: {
      xs: "px-2 min-w-12 h-6 text-tiny gap-1 rounded-small",
      md: "px-4 min-w-20 h-10 text-small gap-2 rounded-small",
      xl: "px-8 min-w-28 h-14 text-large gap-4 rounded-medium",
    },
  },
  defaultVariants: {
    // <- modify/add default variants
    color: "bright",
    size: "xl",
  },
  compoundVariants: [
    // <- modify/add compound variants
    {
      color: "bright",
      class: "bg-secondary-foreground opacity-100",
    },
  ],
});
