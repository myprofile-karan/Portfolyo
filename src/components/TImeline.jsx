import React from "react";

const Timeline = ({ timeline }) => {
  return (
    <div id="timeline" className="section relative w-full sm:px-5">
      <div className="bg absolute w-full h-[200px] top-1/3 md:top-1/2 md:rotate-0 rotate-90 text-8xl md:text-9xl tracking-[2rem] text-center font-bold opacity-10">
        TIMELINE
      </div>
      <div className="container mx-auto">
        <div
          className="headnig flex items-center justify-center gap-3 my-5"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <hr className="bg-white w-[400px] h-[2px]" />
          <h2 className="font-bold text-2xl md:text-4xl py-2 text-center">
            TIMELINE
          </h2>
          <hr className="bg-white w-[400px] h-[2px]" />
        </div>

        <div className="timeline-content w-full p-5 grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="education">
            <h1
              className="text-4xl py-3 mb-10 text-center font-serif border-b-2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              EDUCATION
            </h1>

            {timeline
              ?.filter((elem) => elem.forEducation)
              ?.map((item, index) => (
                <div
                  key={index}
                  className="w-full mx-auto mb-8 shadow-lg hover:shadow-xl transition duration-300"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="border-l-2 border-gray-300 pl-4">
                    <h3 className="text-2xl font-semibold mb-2">
                      {item.jobTitle}
                    </h3>
                    <p className="silver">
                      {item.company_name} - {item.jobLocation}
                    </p>
                    <p className="silver">
                      {item.startDate} - {item.endDate}
                    </p>
                    <ul className="list-disc pl-6 mt-2">
                      {item.bulletPoints.map((point, i) => (
                        <li key={i} className="silver">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>
          <div className="experience">
            <h1
              className="text-4xl py-3 mb-10 text-center font-serif border-b-2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              EXPERIENCE
            </h1>
            {timeline
              ?.filter((elem) => !elem.forEducation)
              ?.map((item, index) => (
                <div
                  key={index}
                  className="w-full mx-auto mb-8 shadow-lg hover:shadow-xl transition duration-300"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="border-l-2 border-gray-300 pl-4">
                    <h3 className="text-2xl font-semibold mb-2">
                      {item.jobTitle}
                    </h3>
                    <p className="silver">
                      {item.company_name} - {item.jobLocation}
                    </p>
                    <p className="silver">
                      {item.startDate} - {item.endDate}
                    </p>
                    <ul className="list-disc pl-6 mt-2">
                      {item.bulletPoints.map((point, i) => (
                        <li key={i} className="silver">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
