import React from "react";

const About = ({ data }) => {
  const { about } = data;
  return (
    <div
      id="about"
      className="lg:h-screen section w-full py-5 lg:py-10 px-5 my-10"
      data-aos="fade-up"
    >
      <div className="bg absolute w-full h-[200px] top-1/3 md:left-1/2 md:top-1/2 md:rotate-0 rotate-90 text-9xl tracking-[2rem]  font-bold opacity-10">
        ABOUT
      </div>
      <div className="container mt-10 mx-auto flex flex-col lg:flex-row gap-10 lg:gap-0">
        <div
          className="about-left lg:w-1/2 flex flex-col items-center"
          data-aos="fade-right"
        >
          <div className="w-[500px] h-[500px] about-img relative overflow-hidden px-8 md:px-0">
            <img
              src={about?.avatar?.url}
              className="w-full h-full object-cover blur-sm rounded-lg border-[silver] border-2"
              alt={about?.name}
            />
            <img
              src={about?.avatar?.url}
              className="w-[350px] h-[350px] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[0]"
              alt={about?.name}
            />
            <div className="exp w-full text-center py-6 z-[0] absolute bottom-0 bg-blur">
              <span className="font-formal text-xl font-semibold border-b-2">
                {about?.quote}
              </span>
            </div>
          </div>
        </div>
        <div
          className="about-right lg:w-1/2 flex flex-col justify-start text-center lg:text-left"
          data-aos="fade-left"
        >
          <div className="about-text">
            <h3 className="text-xl font-bold border-b-2 py-2 inline-block">
              ABOUT ME
            </h3>
            <h3 className="text-3xl font-semibold py-5">{about?.subTitle}</h3>
            <p className="text-lg text-gray-500 leading-9">
              {about?.description}
            </p>
            <div className="contact flex gap-10 py-2 my-5 justify-center lg:justify-start border-t-2 border-b-2">
              <div className="email flex flex-col gap-2">
                <span className="text-lg">Email Address</span>
                <span className="text-xl font-bold">{data?.email}</span>
              </div>
              <div className="phone flex flex-col gap-2">
                <span className="text-lg">Phone Number</span>
                <span className="text-xl font-bold">{about?.phoneNumber}</span>
              </div>
            </div>
            <button className="btn px-8 py-4 rounded-full mt-5">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
