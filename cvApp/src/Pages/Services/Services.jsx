import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdStorefront } from "react-icons/md";
import { MdWeb } from "react-icons/md";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { AiOutlineComment } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";

const Services = () => {
  const infos = [
    {
      component: LiaUserFriendsSolid,
      title: "User-Friendly",
      description:
        "I provide user-friendly front-end web designing to ensure an intuitive and engaging user experience.",
    },

    {
        component: MdStorefront,
        title: "Front-End",
        description:
          "I offer expertise in creating responsive designs, ensuring your website looks and performs perfectly on all devices.",
      },

      {
        component: MdWeb,
        title: "Web Designing",
        description:
          "With a focus on user-friendly interfaces, I create web designs that are easy to navigate and visually appealing",
      },

      {
        component: HiOutlineSquaresPlus,
        title: "Responsive Design",
        description:
          "Specializing in responsive design, I create web applications that look great and function smoothly on any device.",
      },

      {
        component: AiOutlineComment,
        title: "Ecommerce",
        description:
          "As a React developer, I excel in building efficient ecommerce platforms tailored to meet business needs.",
      },

      {
        component: FaShippingFast,
        title: "Fast Service",
        description:
          "I deliver fast service, ensuring timely development and deployment of high-quality web applications.",
      },
  ];
  return (
    <div className="bg-gray-950 h-auto" id="services">
      <div className="text-orange-400 text-3xl pb-3 pt-16 font-semibold text-center">
        Services
      </div>
      <div>
        <hr className="w-[15vw] mx-auto border-0 h-0.5 bg-gradient-to-r from-gray-500 via-orange-500 to-gray-500" />
      </div>

      <div className="text-gray-500 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mx-10 md:mx-32 pb-10 mt-14">
        {
            infos.map((info, index) => {
              const IconComponent = info.component;
              return(
               
              
                  <div key={index} className="border border-gray-800 cursor-default p-10 group/item rounded-md">
                  <div className="bg-black w-28 mx-auto rounded-full shadow-xl h-28 p-4"><IconComponent className="text-7xl mx-auto mt-3 group-hover/item:text-orange-400 duration-500 transition-all" /></div>
                  <div className="group-hover/item:text-orange-400 mt-7 duration-500 transition-all text-center text-2xl text-white">{info.title}</div>
                  <div className="mt-3 text-center">{info.description}</div>
                  </div>
             
              )
            })
        }
      </div>
    </div>
  );
};

export default Services;
