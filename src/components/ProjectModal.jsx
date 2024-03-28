import React from "react";

const ProjectModal = ({ project, closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white w-full max-w-md p-6 rounded-lg">
        <button
          onClick={closeModal}
          className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800"
        >
          Close
        </button>
        <h2 className="text-xl font-bold mb-4">{project.title}</h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="mb-4">
          <p className="font-semibold">Tech Stack:</p>
          <ul className="list-disc pl-6">
            {project.techStack.map((tech, index) => (
              <div>
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
            ))}
          </ul>
        </div>
        <div className="flex justify-between">
          <a
            href={project.liveurl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Live Demo
          </a>
          <a
            href={project.githuburl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
