import type { NextPage } from "next";

import { SectionDivider } from "@/components/shared";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  IntroSection,
  ProjectsSection,
  SkillsSection,
} from "@/views/Home/sections";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <IntroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      {/* <ProjectsSection /> */}
      {/* <SectionDivider /> */}
      <SkillsSection />
      <SectionDivider />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
};

export default Home;
