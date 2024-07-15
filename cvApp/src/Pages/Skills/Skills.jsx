import { useEffect, useRef, useState } from "react";

const SkillsBar = ({ skill, percentage }) => {
  const [width, setWidth] = useState("0%");
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWidth(`${percentage}%`);
            let start = 0;
            const end = percentage;
            const increment = end / 100; // adjust this to change speed
            const duration = 20; // in milliseconds
            const animate = () => {
              start += increment;
              if (start <= end) {
                setCurrentPercentage(Math.ceil(start));
                setTimeout(animate, duration);
              } else {
                setCurrentPercentage(end);
              }
            };
            animate();
            observer.unobserve(barRef.current);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(barRef.current);

    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div className="mb-6 relative" ref={barRef}>
      <div className="text-white font-semibold mb-1">{skill}</div>
      <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
        <div
          className="bg-orange-400 h-1 rounded-full transition-all duration-1000 ease-out"
          style={{ width: width }}
        ></div>
      </div>
      <div className="absolute top-6 right-0 transform -translate-y-8 text-white font-semibold">
        {currentPercentage}%
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { skill: "HTML", percentage: 90 },
    { skill: "CSS", percentage: 85 },
    { skill: "JavaScript", percentage: 80 },
    { skill: "Tailwind", percentage: 85 },
    { skill: "React", percentage: 80 },
  ];
  return (
    <div className="bg-black text-gray-500" id="skills">
      <div className="text-orange-400 text-3xl pb-3 pt-16 font-semibold text-center">
        Skills
      </div>
      <div>
        <hr className="w-[15vw] mx-auto border-0 h-0.5 bg-gradient-to-r from-gray-500 via-orange-500 to-gray-500" />
      </div>

      <div className="lg:flex py-16 md:justify-evenly ">
        <div className=" w-[75vw] mx-auto lg:mx-0  lg:w-[47vw] xl:w-[37vw] ">
          <div className="text-4xl text-white">
            All the skills that I have in that field of work are mentioned.
          </div>
          <p className="mt-4">
            I have extensive knowledge in HTML, CSS, and JavaScript, which forms
            the foundation of my front-end development skills. Proficient in
            React, I build dynamic and efficient web applications with ease. I
            leverage Tailwind CSS to streamline styling, ensuring clean and
            maintainable code for visually appealing and responsive designs.
          </p>
          <p className="mt-5">
            With a strong background in front-end technologies, I excel in
            creating interactive and efficient web applications. My proficiency
            in React and Tailwind CSS ensures high-quality and responsive design
            solutions.
          </p>
        </div>

        <div className=" lg:w-[37vw] w-[75vw] mx-auto lg:mx-0 mt-10 lg:mt-0 ">
          {skills.map((skill, index) => (
            <SkillsBar
              key={index}
              skill={skill.skill}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
