"use client";
import { GithubYears, SiteConfig } from "@/lib/config";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";

const GithubContributions = () => {
  const [year, setYear] = useState(GithubYears[0]);
  return (
    <div className="mt-10">
      <p className="text-3xl font-bold ">Contrbution Graph</p>
      <div className="w-full flex gap-7 items-center mt-5 shadow">
        <div className="light:bg-dot-foreground-800 dark:bg-foreground-100/40 rounded-xl p-5">
          <GitHubCalendar username={SiteConfig.user.githubUserId} year={year} />
        </div>
        <div className="flex flex-col gap-4">
          {GithubYears.map((y) => (
            <Button
              key={y}
              variant="solid"
              size="sm"
              onClick={() => setYear(y)}
              color={year === y ? "primary" : "default"}
            >
              {y}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GithubContributions;
