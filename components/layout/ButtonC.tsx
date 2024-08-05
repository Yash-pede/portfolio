// ButtonC.tsx
import { extendVariants, Button } from "@nextui-org/react";

export const ButtonC = extendVariants(Button, {
  variants: {
    // <- modify/add variants
    color: {
      olive: "text-[#000] bg-[#84cc16]",
      orange: "bg-[#ff8c00] text-[#fff]",
      violet: "bg-[#8b5cf6] text-[#fff] text-bold",
      bright: "bg-white dark:text-secondary",
    },
    radius: {
      small: "rounded-small",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    // <- modify/add default variants
    color: "bright",
  },
  compoundVariants: [
    // <- modify/add compound variants
    {
      color: "bright",
      class: "bg-secondary-foreground opacity-100",
    },
  ],
});
