import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

const Hero = ({ about }) => {
  const heroImgRef = useRef(null);

  useEffect(() => {
    const mouseMoveHandler = function (event) {
      var width = window.innerWidth,
        height = window.innerHeight,
        positionX = event.clientX / width - 0.5,
        positionY = event.clientY / height - 0.5;

      if (heroImgRef.current) {
        heroImgRef.current.style.transform = `rotateY(${
          positionX * 50
        }deg) rotateX(${-positionY * 50}deg)`;
      }
    };

    document.addEventListener("mousemove", mouseMoveHandler);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <>
      <section id="home" className="section w-full relative mt-10">
        <Header name={about?.name} />

        <div className="container py-5 mx-auto flex flex-col-reverse md:flex-row">
          <div className="bgimg w-full h-screen absolute z-[0] left-0">
            <img
              src="./assets/curve.png"
              className="absolute left-1/2 top-0 -translate-x-1/2 object-cover"
              alt=""
            />
            <img
              src="./assets/curve2.png"
              className="absolute left-1/2 bottom-0 z-[0] -translate-x-1/2 object-cover"
              alt=""
            />
          </div>

          <div
            className="left w-full mt-5 md:mt-0 flex flex-col z-[1] items-center justify-center"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h1
              className="text-7xl md:text-8xl font-lobster silver"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              {about?.name}
            </h1>
            <h2
              className="font-cursive"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              {about?.title}
            </h2>
            <p
              className="md:mt-10 font-serif"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              {about?.subTitle}
            </p>
          </div>
          <div
            className="right w-full z-[1] flex items-center justify-center"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div
              className="image w-[400px] h-[450px] md:h-[500px] mt-10 shadow-2xl  transition-all"
              ref={heroImgRef}
              style={{ perspective: "1000" }}
            >
              <img
                src={about?.avatar?.url}
                className="hero-img object-cover w-full h-full transition duration-700"
                alt=""
              />
            </div>
          </div>
        </div>

        <a
          href="#home"
          className="btn fixed bottom-10 right-10 z-[4] px-4 py-2 md:px-6 md:py-4 rounded-full"
        >
          <i className="fa-solid fa-caret-up"></i>
        </a>
      </section>
    </>
  );
};

export default Hero;
