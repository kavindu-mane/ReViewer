import React from "react";
import { List } from "flowbite-react";
import { FaStar } from "react-icons/fa6";

const AnimatedTextSections = ({ data, title, position }) => {
  return (
    <React.Fragment>
      <h1 className="font-Poppins text-4xl font-bold capitalize text-white md:text-5xl lg:text-6xl xl:text-8xl">
        {title}
      </h1>
      {/* topic list */}
      <List className="z-10 mt-10 list-none font-Poppins text-2xl font-medium !text-white md:text-3xl lg:text-4xl xl:text-6xl">
        {Object.keys(data).map((val, key) => {
          return (
            <List.Item
              key={key}
              className="w-fit child:opacity-0 child:hover:opacity-100"
            >
              <p className="cursor-pointer !opacity-100 duration-300 hover:translate-x-8">
                {val}
              </p>
              {/* sublist */}
              <List
                className={`pointer-events-none absolute ${position}-8 top-0 mt-10 hidden list-none font-Poppins text-2xl font-medium italic !text-white duration-300 md:block lg:text-3xl xl:text-4xl`}
              >
                {data[val].map((c, key2) => {
                  return (
                    <div className="flex space-x-3" key={key2}>
                      <FaStar />
                      <List.Item className="w-72 overflow-hidden truncate xl:w-96">
                        {c}
                      </List.Item>
                    </div>
                  );
                })}
              </List>
            </List.Item>
          );
        })}
      </List>
    </React.Fragment>
  );
};

export default AnimatedTextSections;
