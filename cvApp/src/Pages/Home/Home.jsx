import my from "/images/my.jpeg";
import { useEffect, useState } from "react";
import { Link } from 'react-scroll';

import "./Home.css";
const Home = () => {
  const items = [
    { img: "images/instagram.png",url:"https://www.instagram.com/_theycallme_jazzy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", data: "Instagram" },
    { img: "images/snapchat.png",url:"https://snapchat.com/t/BPfvKmfP", data: "Snapchat" },
    { img: "images/twitter.png", data: "Twitter" },
    {
      img: "images/linkedin.png",
      url:
        "https://www.linkedin.com/in/jahanzaib-liaqat-817734287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      data: "LinkDin",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const triggerHeight = 50; // Adjust this value based on when you want the div to slide in
      if (scrollTop > triggerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="md:mt-24 md:mt-" id="home">
      <div className=" bg-black w-full h-[76vh] sm:h-[90vh] lg:h-[99vh] xl:h-[110vh] relative overflow-hidden">
        <div className="bubbles">
          <span style={{ "--i": "11" }}></span>
          <span style={{ "--i": "21" }}></span>
          <span style={{ "--i": "33" }}></span>
          <span style={{ "--i": "24" }}></span>
          <span style={{ "--i": "13" }}></span>
          <span style={{ "--i": "16" }}></span>
          <span style={{ "--i": "14" }}></span>
          <span style={{ "--i": "22" }}></span>
          <span style={{ "--i": "17" }}></span>
          <span style={{ "--i": "29" }}></span>
          <span style={{ "--i": "5" }}></span>
          <span style={{ "--i": "36" }}></span>
          <span style={{ "--i": "25" }}></span>
          <span style={{ "--i": "18" }}></span>
          <span style={{ "--i": "9" }}></span>
          <span style={{ "--i": "44" }}></span>
          <span className="md:block hidden" style={{ "--i": "31" }}></span>
          <span className="md:block hidden" style={{ "--i": "23" }}></span>
          <span className="md:block hidden" style={{ "--i": "47" }}></span>
          <span className="md:block hidden" style={{ "--i": "29" }}></span>
          <span className="md:block hidden" style={{ "--i": "4" }}></span>
          <span className="md:block hidden" style={{ "--i": "17" }}></span>
          <span className="md:block hidden" style={{ "--i": "27" }}></span>
          <span className="md:block hidden" style={{ "--i": "41" }}></span>
          <span className="md:block hidden" style={{ "--i": "51" }}></span>
          <span className="md:block hidden" style={{ "--i": "17" }}></span>
          <span className="md:block hidden" style={{ "--i": "6" }}></span>
          <span className="md:block hidden" style={{ "--i": "13" }}></span>
          <span className="lg:block hidden" style={{ "--i": "25" }}></span>
          <span className="lg:block hidden" style={{ "--i": "45" }}></span>
          <span className="lg:block hidden" style={{ "--i": "62" }}></span>
          <span className="lg:block hidden" style={{ "--i": "19" }}></span>
          <span className="lg:block hidden" style={{ "--i": "55" }}></span>
          <span className="lg:block hidden" style={{ "--i": "1" }}></span>
          <span className="lg:block hidden" style={{ "--i": "10" }}></span>
          <span className="lg:block hidden" style={{ "--i": "72" }}></span>
          <span className="lg:block hidden" style={{ "--i": "66" }}></span>
          <span className="lg:block hidden" style={{ "--i": "14" }}></span>
          <span className="lg:block hidden" style={{ "--i": "24" }}></span>
          <span className="lg:block hidden" style={{ "--i": "12" }}></span>
          <span className="lg:block hidden" style={{ "--i": "51" }}></span>
          <span className="lg:block hidden" style={{ "--i": "27" }}></span>
          <span className="lg:block hidden" style={{ "--i": "37" }}></span>
          <span className="lg:block hidden" style={{ "--i": "34" }}></span>
          <span className="lg:block hidden" style={{ "--i": "26" }}></span>
          <span className="lg:block hidden" style={{ "--i": "11" }}></span>
          <span className="lg:block hidden" style={{ "--i": "54" }}></span>
        </div>
        <div className="flex">
          <div className=" ms-5 md:ms-10 lg:ms-14 xl:ms-[120px] w-[50vw]">
            <p className="text-orange-400 md:text-4xl text-2xl mt-32">
              Hello, I'm{" "}
            </p>
            <div className="text-white font-bold text-6xl md:text-8xl w-28 mt-5">
              Jahanzaib Liaqat
            </div>
            <p className="text-gray-500 text-xl md:text-4xl mt-6">
              Web Developer
            </p>
            <button className="bg-orange-400 text-white py-3 px-10 rounded-3xl mt-10">
              <Link to="contact"  smooth={true} duration={500}>Hire me</Link>
              
            </button>
          </div>

          <div
            className={`absolute right-[0px] transform transition-transform duration-500 ease-in-out top-0 hidden lg:flex ${
              isVisible ? "translate-x-[100px]" : "translate-x-0"
            } `}
          >
            <div className="bg-gradient-to-l from-gray-950 rounded-l-full border-r-0 border-gray-700 border to-gray-900 h-[10vh] w-[27vw] top-[700px] xl:top-[700px] lg:top-[650px] relative">
              <div className="flex text-white gap-4 ms-9 mt-3">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex cursor-pointer group/item  border border-gray-500 p-3 rounded-full gap-2"
                  >
                    <img src={item.img} alt="" className="h-6 w-6" />
                    <a href={item.url} className="hidden group-hover/item:block ">
                      {item.data}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <img src={my} alt="" className="w-[45vw]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
