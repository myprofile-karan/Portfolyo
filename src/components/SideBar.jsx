import React from "react";

const SideBar = ({ setShow }) => {
  return (
    <div
      className="sidebar absolute w-1/2 md:w-[35%] h-screen z-[4] right-[0%] top-0 bg-black"
      data-aos="fade-left"
      data-aos-offset="500"
      data-aos-duration="500"
    >
      <i
        onClick={() => setShow(false)}
        className="fa-solid fa-xmark text-3xl absolute top-5 right-10 cursor-pointer"
      ></i>

      <ul className="flex flex-col justify-center py-10 mt-5">
        <li className="mb-2">
          <a
            href="#home"
            className="block py-3 px-6 rounded-lg text-xl font-bold"
            data-aos="fade-left"
            data-aos-delay="500"
            >
            Home
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#about"
            className="block py-3 px-6 rounded-lg text-xl font-bold hover:bg-gray-950 transition-all"
            data-aos="fade-left"
            data-aos-delay="600"
            >
            About
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#services"
            className="block py-3 px-6 rounded-lg text-xl font-bold hover:bg-gray-950 transition-all"
            data-aos="fade-left"
            data-aos-delay="800"
            >
            Services
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#skills"
            className="block py-3 px-6 rounded-lg text-xl font-bold hover:bg-gray-950 transition-all"
            data-aos="fade-left"
            data-aos-delay="700"
            >
            Skills
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#projects"
            className="block py-3 px-6 rounded-lg text-xl font-bold hover:bg-gray-950 transition-all"
            data-aos="fade-left"
            data-aos-delay="900"
            >
            Projects
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#timeline"
            className="block py-3 px-6 rounded-lg text-xl font-bold hover:bg-gray-950 transition-all"
            data-aos="fade-left"
            data-aos-delay="700"
            >
            Timeline
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#testimonials"
            className="block py-3 px-6 rounded-lg text-xl font-bold"
            data-aos="fade-left"
            data-aos-delay="1000"
            >
            Testimonials
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#contact"
            className="block py-3 px-6 rounded-lg text-xl font-bold"
            data-aos="fade-left"
            data-aos-delay="1100"
            >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
