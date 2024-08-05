"use client";
import { GithubYears, SiteConfig } from "@/lib/config";
import { Tooltip } from "@nextui-org/react";
import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { ButtonC } from "./layout/ButtonC";

const GithubContributions = () => {
  const [year, setYear] = useState(GithubYears[0]);
  return (
    <div className="mt-10 space-y-7">
      <p className="text-3xl font-bold ">Contrbution Graph</p>
      <div className="flex xl:flex-row xl:items-center flex-col gap-4">
        <div className="bg-secondary/30 border border-divider p-8 rounded-lg max-w-fit max-h-fit z-20">
          <GitHubCalendar
            username={SiteConfig.user.socials.githubUserId}
            year={year}
            renderBlock={(block, activity) => (
              <Tooltip showArrow
              content={`${activity.count} activities on ${activity.date}`}
              >
                {block}
              </Tooltip>
            )}
          />
        </div>
        <div className="flex justify-start xl:flex-col flex-row flex-wrap gap-2">
          {GithubYears.map((y) => (
            <ButtonC 
              key={y}
              variant="solid"
              size="md"
              radius="full"
              color={y === year ? "success" : "secondary"}
              onClick={() => setYear(y)}
            >
              {y}
            </ButtonC>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GithubContributions;
