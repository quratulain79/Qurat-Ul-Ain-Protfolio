"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-4" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-3 gap-x-10 gap-y-2 mt-4">
        {projects.map((item) => (
          <div
            key={item.id}
            className="lg:min-h-[24rem] h-auto flex items-start justify-center sm:w-[440px] w-[92vw]"
          >
            {/* PinContainer handles the overall card click/hover effect */}
            <PinContainer title={item.link} href={item.link}>
              
              {/* Image Box */}
              <div className="relative flex items-center justify-center sm:w-[440px] w-[92vw] overflow-hidden h-[160px] sm:h-[180px] lg:h-[210px] mb-2">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>

                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 h-full object-contain"
                />
              </div>

              {/* Title */}
              <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1">
                {item.title}
              </h1>

              {/* Description */}
              <p
                className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "0.35rem 0",
                }}
              >
                {item.des}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-3 mb-1">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-9 lg:h-9 w-7 h-7 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                {/* ✅ Link Fixed: Ab ye clickable hai aur new tab mein khulega */}
                <div className="flex justify-center items-center">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex lg:text-lg md:text-xs text-sm text-purple hover:underline"
                  >
                    Check Live Site
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </a>
                </div>
              </div>

            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;