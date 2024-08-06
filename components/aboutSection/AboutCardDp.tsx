"use client";
import { Avatar } from "@nextui-org/react";
import React from "react";
import { ButtonC } from "../layout/ButtonC";
import { SiteConfig } from "@/lib/config";
import Link from "next/link";

export const AboutCardDp = () => {
  return (
    <Link
      href={`https://linkedin.com/in/${SiteConfig.user.socials.linkedInUserId}`}
      color="foreground"
      className="relative w-full h-full flex gap-2 items-center justify-center flex-col p-5"
      target="_blank"
    >
      <Avatar src={"/images/dp.jpg"} className="md:w-16 md:h-16 text-large" />
      @{SiteConfig.user.username}
      <ButtonC
        color="bright"
        variant="flat"
        className="bg-secondary-foreground"
      >
        Follow
      </ButtonC>
    </Link>
  );
};
