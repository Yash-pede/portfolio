import React from "react";

const SectionHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="text-start  md:text-center w-full md:max-w-[60%] flex float-none flex-nowrap justify-center items-start md:items-center flex-col gap-5 mb-5 md:mb-10">
      <p className="text-primary font-medium text-lg">{title}</p>
      <p className="text-2xl font-medium md:font-light md:text-4xl">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
