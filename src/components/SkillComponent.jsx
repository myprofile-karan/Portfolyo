import React from "react";

const SkillComponent = ({ item }) => {
  return (
    <div
      className="rounded-full flex flex-col items-center gap-3"
      data-aos="fade-up"
    >
      <div className="image w-full">
        <img
          src={item.image.url}
          className="w-full object-cover hover:scale-125 transition-all"
          data-aos="flip-right"
          data-aos-duration="1000"
          alt=""
        />
      </div>
      <h4 className="font-lobster text-xl">{item.name}</h4>
      <div className="mt-5 w-full px-4">
        <div className="mb-12">
          <div className="dark:bg-white relative h-2.5 w-full rounded-2xl">
            <div
              style={{ width: `${item.percentage}%` }}
              className="bg-gray-800 absolute top-0 left-0 h-full rounded-2xl"
            >
              <span className="bg-gray-800 absolute -right-4 bottom-full mb-2 rounded-sm px-3.5 py-1 text-sm text-white">
                <span className="bg-gray-800 absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                {item.percentage}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillComponent;
