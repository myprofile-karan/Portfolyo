import React from "react";

const Footer = ({ social }) => {
  return (
    <footer className="section w-full py-7">
      <div className="container mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="left">
          <p className="font-serif">
            Copyright © 2021. All rights are reserved
          </p>
        </div>
        <div className="right flex gap-4">
          {social?.map((icon) => {
            return (
              <div key={icon._id} className="social w-[50px]">
                <img
                  src={icon.image.url}
                  className="w-full h-full object-cover cursor-pointer"
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
