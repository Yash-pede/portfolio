"use client";
import { footerOptions, SiteConfig, socialLinks } from "@/lib/config";
import { Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <motion.div
      className="w-full mt-24 pb-14 pt-6 gap-3 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative rounded-t-[7rem] "
      initial={{
        backgroundImage:
          "radial-gradient(75% 63.6% at 50% 2.5%, rgba(36, 115, 236, 0.4) 0%, rgba(99, 102, 241, 0) 100%)",
      }}
      whileHover={{
        backgroundImage:
          "radial-gradient(75% 63.6% at 50% 2.5%, rgba(36, 115, 236, 0.7) 0%, rgba(99, 102, 241, 0) 100%)",
      }}
      transition={{
        duration: 0.6,
        delay: 0.2,
      }}
    >
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-secondary-foreground/5 [mask-image:linear-gradient(90deg,transparent_20%,black)]"></div> */}
      <div>
        <div className="flex gap-x-14 justify-center pt-5">
          <div className="space-y-5 max-w-80 ">
            <Link color="foreground" href="/" className="font-semibold">
              Logo
            </Link>
            <br />
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

          <div className="flex flex-row space-x-24 font-semibold">
            {footerOptions.map((items, index) => (
              <div className="flex flex-col gap-4" key={index}>
                {items.title}
                <div className="flex flex-col font-medium gap-2">
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
    </motion.div>
  );
};

export default Footer;
