

import { FaCirclePlus } from "react-icons/fa6";
const Portfolio = () => {
  const values = [
    { img: "images/WEb.PNG", component: FaCirclePlus, title: "Medical", description: "Website", url:"https://github.com/TheJahanzaibLiaqat/ClaueEcommerce_React" },
    { img: "images/CodeStore.PNG", component: FaCirclePlus, title: "CodeStore", description: "Website" , url:"https://github.com/TheJahanzaibLiaqat/CodeStore_Website_React" },
    { img: "images/Ecommerce.PNG", component: FaCirclePlus, title: "Ecommerce", description: "Website" , url:"https://github.com/TheJahanzaibLiaqat/EcommerceApp_React"},
    { img: "images/Movie.PNG", component: FaCirclePlus, title: "Movie", description: "Website", url:"https://github.com/TheJahanzaibLiaqat/MovieApp_React/tree/main/movieApp" },
    { img: "images/Medical.PNG", component: FaCirclePlus, title: "Product", description: "Website" , url:"https://github.com/TheJahanzaibLiaqat/DentistMedical_React"},
    { img: "images/Product.PNG", component: FaCirclePlus, title: "Product", description: "Website" , url:"https://github.com/TheJahanzaibLiaqat/ProductApp_React"},
  ];
  return (
    <div className="bg-gray-950" id="portfolio">
      <div className="text-orange-400 text-3xl pb-3 pt-16 font-semibold text-center">
        Portfolio
      </div>
      <div>
        <hr className="w-[15vw] mx-auto border-0 h-0.5 bg-gradient-to-r from-gray-500 via-orange-500 to-gray-500" />
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7 mx-10 md:mx-28 py-20">
        {values.map((value, index) => {
             const IconComponent = value.component
            return  (
                <div
                key={index}
                className="relative w-full h-[250px] rounded-lg overflow-hidden group"
              >
                
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 transform group-hover:scale-110 group-hover:filter group-hover:brightness-50"
                  style={{ backgroundImage: `url(${value.img})` }}
                ></div>
                <div className="absolute top-0 left-0 w-full cursor-pointer h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white font-semibold">
                  <div className="border-2 border-white py-5 px-10 sm:py-5 sm:px-24  md:py-5 md:px-10 text-center rounded-md">
                     <div className=" mt-10 p-2 w-24 mx-auto bg-orange-400 rounded-full"><a href={value.url}><IconComponent className="h-10 w-10 mx-auto" /></a></div>
                     <div className="mt-10 text-2xl">{value.title}</div>
                     <div className="text-gray-900">{value.description}</div>
                  </div>
                </div>
              </div>
             )}
        )}
      </div>

      <div className="w-[150px] sm:w-[24vw] md:w-[18vw] lg:w-[13vw] xl:w-[11vw] mx-auto pb-10"><button className="bg-orange-400 text-white px-7 py-3 rounded-full">Load More</button></div>
    </div>
  );
};

export default Portfolio;
