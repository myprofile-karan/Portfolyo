import React from "react";
import SkillComponent from "./SkillComponent";

const Skills = ({ skills }) => {
  return (
    <div
      id="skills"
      className="section px-5 flex flex-col items-center justify-center my-10 mt-20"
      data-aos="fade-up"
    >
      <div className="bg absolute w-full h-[200px] top-1/3 md:top-1/2 rotate-90 md:rotate-0 text-9xl tracking-[2rem] text-center font-bold opacity-10">
        SKILLS
      </div>
      <div className="headnig flex items-center justify-center text-center gap-5">
        <hr className="bg-white w-[400px] h-[2px]" />
        <h2
          className="font-bold text-2xl md:text-4xl py-2"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          MY SKILLS
        </h2>
        <hr className="bg-white w-[400px] h-[2px]" />
      </div>
      <div className="container mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 justify-center flex-wrap gap-x-5 gap-y-5 mt-14">
        {skills?.map((item) => {
          return <SkillComponent key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
