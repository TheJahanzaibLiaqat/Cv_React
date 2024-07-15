import my from "/images/cv.jpeg";
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import CVComponent from "../../Components/CVComp/CVComponent";


const About = () => {

  const cvRef = useRef();

  // const handlePrint = () => {
  //   window.print();
  // };


  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
  });


  return (
    <div className="bg-gray-950 h-auto" id="about">
      <div>
        <div className="text-orange-400 text-3xl pb-3 pt-16 font-semibold text-center">
          About me
        </div>
        <div>
          <hr className="w-[15vw] mx-auto border-0 h-0.5 bg-gradient-to-r from-gray-500 via-orange-500 to-gray-500" />
        </div>
      </div>

      <div className="text-gray-500 md:flex py-14 sm:w-[60vw]  md:w-[70vw] mx-10 sm:mx-auto">
        <div>
          <img
            src={my}
            alt=""
            className="xl:h-[520px] h-[550px] w-[500px] md:h-[620px] md:w-[400px] lg:h-[600px] lg:w-[420px] xl:w-[400px]"
          />
        </div>
        <div className="md:w-[40vw] md:ms-10 mt-5 md:mt-0">
          <div className="text-white text-4xl">
            Hi There! I'm Jahanzaib Liaqat
          </div>
          <div className="text-orange-400 mt-3 text-2xl">Web Developer</div>
          <p className="mt-3">
            I am a React developer specializing in building dynamic and
            responsive web applications. I leverage Tailwind CSS to streamline
            the styling process, ensuring efficient and maintainable code. My
            expertise allows me to create visually appealing and user-friendly
            interfaces with ease.
          </p>


<div className="md:flex gap-2 lg:gap-10">
  <div>
  <div className="flex mt-4">
            <p className="w-[100px]">Birthday</p>:
            <p className="ps-3">May 01, 2001</p>
          </div>

          <div className="flex mt-4">
            <p className="w-[100px]">Phone</p>:
            <p className="ps-3">+92 3134964026</p>
          </div>

          <div className="flex mt-4">
            <p className="w-[100px]">Email</p>:
            <p className="ps-3">jahan.zaib3373@gmail.com</p>
          </div>

          <div className="flex mt-4">
            <p className="w-[100px]">From</p>:
            <p className="ps-3">Faisalabad, Pakistan</p>
          </div>

          <div className="flex mt-4">
            <p className="w-[100px]">Language</p>:
            <p className="ps-3">English, Urdu</p>
          </div>

          <div className="flex mt-4">
            <p className="w-[100px]">Freelance</p>:
            <p className="ps-3">Available</p>
          </div>

  </div>

  <div>
  <CVComponent ref={cvRef}/>
  </div>
</div>
          
           
          <button  onClick={handlePrint} className="bg-orange-400 text-white px-6 py-3 rounded-full mt-10">
            Download Cv
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
