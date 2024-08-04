import React from "react";
import Title from "../../components/Title";
import { experiences } from "../../resources/experience";

const Experiences = () => {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <Title title="Experiences" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full ">
          {experiences.map((experiences, index) => (
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
                {experiences.period}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-2xl">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-2xl">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            assumenda obcaecati, aliquam labore exercitationem nam deleniti
            ratione officiis quo soluta! Dolores in id placeat, alias asperiores
            autem quidem sint nobis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
