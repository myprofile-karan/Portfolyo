import React from "react";

const Projects = ({ projects }) => {
  return (
    <div id="projects" className="section my-20 px-5">
      <div className="flex flex-col items-center justify-center my-10">
        <div className="headnig flex items-center justify-start gap-3 my-10">
          <hr className="bg-white w-[400px] h-[2px]" />
          <h2
            className="font-bold text-2xl md:text-4xl py-2"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            Projects
          </h2>
          <hr className="bg-white w-[400px] h-[2px]" />
        </div>{" "}
        <p>Each project is a unique piece of development</p>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects?.map((project) => {
            return (
              <div
                key={project._id}
                className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl"
                data-aos="fade-up"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image.url}
                    alt="Project"
                    className="w-full transition duration-300 transform group-hover:scale-110 filter brightness-100 hover:brightness-110"
                    data-aos="zoom-in"
                  />
                  <div className="absolute inset-0 bg-gray-800 opacity-0 transition duration-300 group-hover:opacity-90 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 ">
                    {project?.title}
                  </div>
                  <p className="text-gray-600 font-serif text-base">
                    {project.description}
                  </p>
                </div>
                <div className="px-6 py-4">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Tech Stack: {project.techStack.join(", ")}
                  </span>
                </div>
                <div className="px-6 py-4">
                  <a
                    href={project.liveurl}
                    className="btn font-bold py-2 px-4 rounded"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githuburl}
                    className="btn text-white font-bold py-2 px-4 rounded ml-2"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
