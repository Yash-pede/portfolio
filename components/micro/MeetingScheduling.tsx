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
      className="relative w-full h-full flex justify-between items-start p-4 md:p-6 group gap-28"
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
      <div className="overflow-hidden w-full h-full inset-0 transition-all duration-400 relative left-[0%] top-[20%] group-hover:top-[15%] scale-125 rounded-lg border-[0.5px] border-divider">
        <Image
          src={GoogleCalander}
          alt="calendar"
          className="w-full h-full object-cover transition-all duration-400 "
        />
      </div>
    </Link>
  );
};

export default MeetingScheduling;
