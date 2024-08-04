"use client";
import { Avatar, Button, Link } from "@nextui-org/react";
import React from "react";
import { ButtonC } from "../layout/ButtonC";
import { SiteConfig } from "@/lib/config";

const AboutCardDp = () => {
  return (
    <Link
      href={`https://linkedin.com/in/${SiteConfig.user.socials.linkedInUserId}`}
      color="foreground"
      className="w-full h-full flex gap-2 items-center justify-center flex-col"
      isExternal
    >
      <Avatar src={"/images/dp.jpg"} className="w-16 h-16 text-large" />
      {SiteConfig.user.username}
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

export default AboutCardDp;
