"use client";

import React from "react";
import { Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { skills } from "@/lib/config";
import { fadeInAnimation } from "@/lib/animations";

const MotionChip = motion(Chip);

const SkillsStagger = () => {
  return (
    <section className="w-full h-full flex flex-col gap-5 md:gap-7 items-center justify-center ">
      <div className="max-w-md flex justify-center items-center flex-col gap-5">
        <p className="text-primary font-medium text-lg">SKILLS</p>
        <p className="text-4xl">Here’s what I can do</p>
      </div>
      <div className="flex justify-center items-center flex-wrap max-w-4xl gap-3">
        {skills.map((skill, i) => (
          <MotionChip
            key={i}
            variant="flat"
            color="primary"
            className="text-lg px-7 py-5 rounded-lg"
            variants={fadeInAnimation}
            initial="initial"
            animate="animate"
            whileInView="animate"
            viewport={{ once: true }}
            custom={i}
          >
            {skill}
          </MotionChip>
        ))}
      </div>
    </section>
  );
};

export default SkillsStagger;
