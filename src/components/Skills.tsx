"use client";
import React from "react";
import AwarenessList from "./AwarenessList";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <SkillCard
          imageSrc="/img/os-install.jpg"
          altText="OS Installation"
          title="OS Installation"
          description="In this activity, we learned how to perform operating system installations, focusing on different types and versions of the Windows operating system using Oracle VirtualBox."
        />
        <SkillCard
          imageSrc="/img/virtual-box.jpg"
          altText="Virtual Box"
          title="Virtual Box"
          description="VirtualBox allows us to create virtual machines and install operating systems in an isolated environment without affecting our host computer's system."
        />
        <SkillCard
          imageSrc="/img/adobe-xd.jpg"
          altText="Adobe XD"
          title="Adobe XD"
          description="In this tutorial, we will explore Adobe XD's prototyping features to transform static designs into interactive mockups, allowing us to create clickable user interfaces and seamless animations for websites and mobile applications."
        />
      </div>
      <span className="flex flex-wrap justify-center items-start gap-5 md:p-8 rounded-lg p-3">
        <AwarenessList />
      </span>
    </div>
  );
};

export default Skills;
