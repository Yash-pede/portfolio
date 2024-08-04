import { SiteConfig } from "@/lib/config";
import { GoogleCalander } from "@/public/images";
import { Link } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const MeetingScheduling = () => {
  return (
    <Link
      isExternal
      href={SiteConfig.user.schedulerLink}
      className="relative w-full h-full flex jusspace-between items-start p-4 md:p-6 group"
    >
      <div className="w-full h-full flex flex-col gap-3 text-foreground text-start">
        <h3 className="text-xl">Book a call with me</h3>
        <p className="text-sm text-foreground/80">
          I&apos;d love to chat even if there&apos;s no agenda.
        </p>
        <p className="text-xs text-foreground/60 mt-auto">
          Powerd by google calendar
        </p>
      </div>
      <div className="absolute overflow-hidden w-full h-full">
        <Image
          src={GoogleCalander}
          alt="calendar"
          className="w-full h-full transition-all duration-400 relative left-[50%] top-[15%] group-hover:top-[10%] rounded-lg border-[0.5px] border-divider z-20"
        />
      </div>
    </Link>
  );
};

export default MeetingScheduling;
