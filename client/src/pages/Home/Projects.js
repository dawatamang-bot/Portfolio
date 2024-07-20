import React from "react";
import { projects } from "../../resources/projects";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <div className="flex gap-10 items-center py-10">
        <h1 className="text-3xl text-white "> About </h1>
        <div className="w-60 h-[1px] bg-tertiary"></div>
      </div>
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full ">
          {projects.map((projects, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-10 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3"
                    : "text-white"
                }`}
              >
                {projects.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <img
            src={projects[selectedItemIndex].image}
            alt=""
            className="h-60 w-72"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-2xl">
              {projects[selectedItemIndex].title}
            </h1>

            <p className="text-white">
              {projects[selectedItemIndex].description}
            </p>

            <p className="text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              assumenda obcaecati, aliquam labore exercitationem nam deleniti
              ratione officiis quo soluta! Dolores in id placeat, alias
              asperiores autem quidem sint nobis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
