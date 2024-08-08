import React from "react";

const SectionHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="text-start md:text-center w-full flex justify-center items-start md:items-center flex-col gap-2 md:gap-5 mb-7 md:mb-10">
      <p className="text-primary font-medium text-lg uppercase">{title}</p>
      <p className="md:max-w-[50%] text-2xl md:text-3xl">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
