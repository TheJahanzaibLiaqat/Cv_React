import { RiShoppingBag3Line } from "react-icons/ri";
import { MdCastForEducation } from "react-icons/md";

const Resume = () => {
  return (
    <div className="bg-black" id="resume">
      <div className="text-orange-400 text-3xl pb-3 pt-16 font-semibold text-center">
        Resume
      </div>
      <div>
        <hr className="w-[15vw] mx-auto border-0 h-0.5 bg-gradient-to-r from-gray-500 via-orange-500 to-gray-500" />
      </div>

      <div className="justify-around lg:flex py-16 w-[80vw] mx-auto">
        <div>
          <div className="flex text-4xl gap-3 items-center">
            <RiShoppingBag3Line className="text-gray-500 text-5xl" />
            <span className="text-white ">Experience</span>
          </div>

          <div className="mt-14 w-[80vw] lg:w-[37vw] group/item ms-4">
            <div className="border h-3 w-3 rounded-full border-gray-500 group-hover/item:bg-orange-400 duration-300 transition-all"></div>
            <div className="text-gray-500 border-l border-gray-500 ps-10 ms-[5px] pb-4  cursor-default">
              <div className="text-2xl font-semibold text-orange-400">
                Front-End Developer
              </div>
              <p className="text-lg mt-2">July 2022 - Feb 2023</p>
              <div className="text-xl text-white mt-4">WepEx - Faisalabad</div>
              <p className="mt-3 text-lg">
                During my internship, I honed my skills in React by working on
                various front-end projects, leveraging modern tools and
                frameworks to create dynamic and responsive web applications.
                This experience allowed me to deepen my understanding of React's
                core concepts and best practices.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex text-4xl gap-3 items-center mt-10 lg:mt-0">
            <MdCastForEducation className="text-gray-500 text-5xl" />
            <span className="text-white ">Education</span>
          </div>

          <div className="ms-3">
            <div className="mt-14 w-[80vw] lg:w-[37vw] group/item">
              <div className="border h-3 w-3 rounded-full border-gray-500 group-hover/item:bg-orange-400 duration-300 transition-all"></div>
              <div className="text-gray-500 border-l border-gray-500 ps-10 ms-[5px] pb-6  cursor-default">
                <div className="text-2xl font-semibold text-orange-400">
                  Bachelors in Computer Secience
                </div>
                <p className="text-lg mt-2">June 2020 - June 2024</p>
                <div className="text-xl text-white mt-4">
                  National University of Modern Languages
                </div>
                <p className="mt-3 text-lg">
                  I hold a Bachelor's degree in Computer Science, which has
                  provided me with a strong foundation in programming,
                  algorithms, and software development. My education has
                  equipped me with the skills necessary to excel in the field of
                  web development, particularly with React and Tailwind CSS.
                </p>
              </div>
            </div>

            <div className="w-[80vw] lg:w-[37vw] group/item ">
              <div className="border h-3 w-3 rounded-full border-gray-500 group-hover/item:bg-orange-400 duration-300 transition-all"></div>
              <div className="text-gray-500 border-l border-gray-500 ps-10 ms-[5px] pb-6  cursor-default">
                <div className="text-2xl font-semibold text-orange-400">
                  Intermediate
                </div>
                <p className="text-lg mt-2">March 2018 - March 2020</p>
                <div className="text-xl text-white mt-4">Punjab College</div>
                <p className="mt-3 text-lg">
                  I have completed my intermediate pre-engineering with a strong
                  foundation in mathematics, physics, and engineering principles
                </p>
              </div>
            </div>

            <div className="w-[80vw] lg:w-[37vw] group/item ">
              <div className="border h-3 w-3 rounded-full border-gray-500 group-hover/item:bg-orange-400 duration-300 transition-all"></div>
              <div className="text-gray-500 border-l border-gray-500 ps-10 ms-[5px] pb-6  cursor-default">
                <div className="text-2xl font-semibold text-orange-400">
                  Matric
                </div>
                <p className="text-lg mt-2">Complete in 2018</p>
                <div className="text-xl text-white mt-4">
                  The City Grammar School
                </div>
                <p className="mt-3 text-lg">
                I completed my matriculation in computer science
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
