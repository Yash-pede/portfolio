"use client";
import { footerOptions, SiteConfig, socialLinks } from "@/lib/config";
import { Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full gap-3 rounded-t-[7rem] flex flex-col gap-x-14 justify-center pt-10 bg-secondary md:h-[66] px-7 dark:bg-secondary/60 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] items-center mt-24 border-red-500">
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-secondary-foreground/5 [mask-image:linear-gradient(90deg,transparent_20%,black)]"></div> */}
      <div className="pb-5 md:flex md:flex-row md:space-x-20">
        <div className=" flex flex-col space-y-6 md:w-56 ">
          <Link color="foreground" href="/" className="font-semibold">
            Logo
          </Link>
          <p className="font-medium">
            I&apos;m {SiteConfig.user.firstName} - a senior front-end developer,
            thanks for checking out my site!
          </p>

          <div className="flex flex-row space-x-3 text-neutral-700">
            {socialLinks.map((link, index) => (
              <Link color="foreground" href={link.url} key={index}>
                {link.icon}
              </Link>
            ))}
          </div>

          <div>© 2024 {SiteConfig.site.name}</div>
        </div>


        <div className="flex flex-wrap gap-x-20 font-semibold md:flex-row md:gap-20 md:justify-center">
        {footerOptions.map((items, index) => (
          <div className="flex flex-col gap-3 mt-14 md:mt-0" key={index}>
            {items.title}
            <div className="flex flex-col font-medium space-y-1">
              {items.routes.map((link, index) => (
                <Link color="foreground" href={link.route} key={index}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Footer;
