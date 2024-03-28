import React from "react";

const Contact = ({ about }) => {
  return (
    <div id="contact" className="section my-10 py-10 px-5 relative" data-aos="fade-up">
      <div className="bg absolute w-full h-[200px] top-1/3 md:top-1/2 md:rotate-0 rotate-90 text-8xl md:text-9xl tracking-[2rem] text-center font-bold opacity-10">
        CONTACT US
      </div>
      <div className="container mx-auto">
        <div
          className="headnig flex items-center justify-center gap-3 my-5"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <hr className="bg-white w-[400px] h-[2px]" />
          <h2 className="font-bold text-2xl md:text-4xl py-2 text-center">
            CONTACT ME
          </h2>
          <hr className="bg-white w-[400px] h-[2px]" />
        </div>
        <p className="text-center" data-aos="fade-up" data-aos-duration="1000">
          Feel free to contact me
        </p>
        <div
          className="form-section grid md:grid-cols-2 gap-5 mt-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="left">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div
                className="w-full md:w-1/2 px-3 mb-6 md:mb-0"
                data-aos="zoom-in"
                data-aos-duration="1100"
              >
                <label
                  htmlFor="name"
                  className="block uppercase tracking-widest text-xs font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
                <p className="text-xs italic">Please enter your name.</p>
              </div>
              <div
                className="w-full md:w-1/2 px-3"
                data-aos="zoom-in"
                data-aos-duration="1200"
              >
                <label
                  htmlFor="email"
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
                <p className="text-xs italic">
                  Please enter your email address.
                </p>
              </div>
            </div>
            <div
              className="flex flex-wrap -mx-3 mb-6"
              data-aos="zoom-in"
              data-aos-duration="1300"
            >
              <div className="w-full px-3">
                <label
                  htmlFor="message"
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  placeholder="Message"
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white h-40 resize-none"
                />
                <p className="text-xs italic">Please enter your message.</p>
              </div>
            </div>
            <button
              type="submit"
              className="btn font-bold py-2 px-4 rounded"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Send Message !
            </button>
          </div>
          <div className="right px-10">
            <div
              className="details flex items-center gap-10 border-b-2 py-4"
              data-aos="fade-left"
              data-aos-duration="900"
            >
              <div className="image">
                <img src="./assets/contact-icon-1.png" alt="" />
              </div>
              <div className="image-content font-serif">
                <h1 className="text-xl">Phone Number</h1>
                <p>{about?.phoneNumber}</p>
              </div>
            </div>
            <div
              className="details flex items-center gap-10 border-b-2 py-4"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="image">
                <img src="./assets/contact-icon-2.png" alt="" />
              </div>
              <div className="image-content font-serif">
                <h1 className="text-xl">{about?.address}</h1>
              </div>
            </div>
            <div
              className="details flex items-center gap-10 border-b-2 py-4"
              data-aos="fade-left"
              data-aos-duration="1100"
            >
              <div className="image">
                <img src="./assets/contact-icon-3.png" alt="" />
              </div>
              <div className="image-content font-serif">
                <h1 className="text-xl">Email</h1>
                <p>{about?.contactEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
