import React from "react";

const Services = ({ services }) => {
  return (
    <div id="services" className="w-full section my-20" data-aos="fade-up">
      <div className="bg absolute w-full h-[200px] top-1/3 md:top-1/2 rotate-90 md:rotate-0 text-9xl tracking-[2rem] text-center font-bold opacity-10">
        SERVICES
      </div>
      <div className="mx-auto flex flex-col items-center justify-center my-10 px-5">
        <div className="headnig flex items-center justify-center text-center gap-5 my-10">
          <hr className="bg-white w-[400px] h-[2px]" />
          <h2
            className="font-bold text-2xl md:text-4xl py-2"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            SERVICES
          </h2>
          <hr className="bg-white w-[400px] h-[2px]" />
        </div>
        <div className="w-full mt-10 flex flex-col gap-20 md:gap-10">
          {services?.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-around md:gap-5 gap-3"
                data-aos="fade-up"
              >
                <div className="service-image w-[150px] h-[150px] md:w-[100px] md:h-[100px] relative lg:w-[150px] lg:h-[150px] rounded-full overflow-hidden">
                  <div className="transition-layer transition duration-500 backdrop-blur-sm w-full h-full absolute z-[3] top-0 opacity-0 flex items-center justify-center text-center text-black font-bold text-lg">
                    {service?.name}
                  </div>
                  <img
                    src={service?.image?.url}
                    className="w-full h-full object-cover"
                    alt=""
                    data-aos="flip-right"
                    data-aos-duration="1000"
                  />
                </div>
                <div className="content transi md:w-[600px] lg:w-[800px] border-l-2 px-5 flex flex-col items-center text-center md:text-left md:items-start gap-5">
                  <h1
                    className="text-4xl md:text-5xl lg:text-7xl text-[white] font-semibold tracking-wider"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    {service.name}
                  </h1>
                  <h4 className="tracking-[2px] font-thin">{service.desc}</h4>
                </div>
                <button
                  className="btn w-[150px] h-[60px] md:w-[80px] md:h-[80px] flex items-center justify-center px-8 py-4 rounded-full mt-5 "
                  data-aos="fade-up"
                >
                  <i className="fa-solid fa-arrow-right text-2xl"></i>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
