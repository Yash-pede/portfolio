import About from "@/components/About";
import GithubContributions from "@/components/GithubContributions";
import ScrollingText from "@/components/ScrollingText";
import SkillsStagger from "@/components/skills/SkillsStagger";

export default function Home() {
  return (
    <div className="flex flex-col gap-36">
      <GithubContributions />
      <ScrollingText text="I'm an experienced front-end developer with a passion for design and a knack for tinkering. Web development is my playground, where push boundaries and chase new horizons." />
      <About/>
      <SkillsStagger/>
    </div>
  );
}
