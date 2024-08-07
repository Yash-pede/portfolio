import { changelog } from "@/lib/config";
import React from "react";

const ChangelogPage = () => {
  return (
    <div>
      <div>
        {changelog.map((data, index) => (
          <p key={index}>{data.title}</p>
        ))}
      </div>
    </div>
  );
};

export default ChangelogPage;
