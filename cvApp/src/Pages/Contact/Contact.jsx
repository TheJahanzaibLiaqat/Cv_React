import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from 'react';





const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject:'',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://formspree.io/f/xwpepqde', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' , subject: '' });
        } else {
          throw new Error('Form submission failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


    const items = [
      { img: "/images/instagram.png",url:"https://www.instagram.com/_theycallme_jazzy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", data: "Instagram" },
      { img: "/images/snapchat.png",url:"https://snapchat.com/t/BPfvKmfP", data: "Snapchat" },
      { img: "/images/twitter.png", data: "Twitter" },
      {
        img: "/images/linkedin.png",
        url:
          "https://www.linkedin.com/in/jahanzaib-liaqat-817734287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        data: "LinkDin",
      },
      ]
  return (
    <div className="bg-black" id="contact">
      <div className="text-orange-400 text-3xl pb-3 pt-16 font-semibold text-center">
        Contact
      </div>
      <div>
        <hr className="w-[15vw] mx-auto border-0 h-0.5 bg-gradient-to-r from-gray-500 via-orange-500 to-gray-500" />
      </div>

      <div className="lg:flex py-16 md:mx-auto md:w-[90vw] xl:w-[90vw] lg:w-[90vw]">


        <div className="lg:w-[45vw] xl:w-[40vw]  mx-10 md:mx-auto md:w-[50vw]">
          <div className="text-white text-4xl">Just say Hello</div>

{
  submitted ? <div className="text-4xl text-white font-semibold mt-20 md:mt-32">Thanks for your message!</div> : <form onSubmit={handleSubmit}>
  <div className="flex flex-col text-white">
    <input
      type="text"
      placeholder="Your Name"
      className="md:w-[550px] mt-7 outline-none bg-gray-950 border border-gray-400 rounded-md p-3"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
    />
    <input
      type="email"
      placeholder="Your Email"
      className="md:w-[550px] mt-7 outline-none bg-gray-950 border border-gray-400 rounded-md p-3"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required

    />
    <input
      type="text"
      placeholder="Your Subject"
      className="md:w-[550px] mt-7 outline-none bg-gray-950 border border-gray-400 rounded-md p-3"
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      required

    />

    <textarea
      placeholder="Your Message"
      className="md:w-[550px] mt-7 outline-none bg-gray-950 border border-gray-400 rounded-md h-40 p-3"
      name="message"
      value={formData.message}
      onChange={handleChange}
      required

    ></textarea>
  </div>
  <div>
    <button type="submit" className="bg-orange-400 text-white py-4 px-7 mt-8 rounded-full">
      Send Message
    </button>
  </div>
  </form>
}


        </div>


{/* =================================================== */}



        <div className="mt-14 lg:w-[35vw] xl:w-[35vw] text-gray-500 lg:mt-0 mx-10 md:mx-auto md:w-[50vw]">
          <div className="text-white text-4xl">Contact Info</div>
          <p className="lg:w-[40vw] mt-5">
          Connect with me on LinkedIn, Instagram and Snapchat for networking and professional engagements:
          </p>

          <div>

          <div className="flex items-center gap-3 mt-8 group/item">
            <div className=" w-fit p-3 rounded-full border border-gray-400 group-hover/item:border-orange-400 duration-500"><IoMdMail className="h-8 w-8" /></div>

            <div>
                <div className="text-white text-2xl">Email</div>
                <div className="mt-1 cursor-pointer hover:text-orange-400 duration-500">jahan.zaib3373@gmail.com</div>
            </div>
          </div>


          <div className="flex items-center gap-3 mt-8 group/item">
            <div className=" w-fit p-3 rounded-full border border-gray-400 group-hover/item:border-orange-400 duration-500"><IoCall className="h-8 w-8"/></div>

            <div>
                <div className="text-white text-2xl">Phone</div>
                <div className="mt-1">+923134964026</div>
            </div>
          </div>


          <div className="flex items-center gap-3 mt-8 group/item">
            <div className=" w-fit p-3 rounded-full border border-gray-400 group-hover/item:border-orange-400 duration-500"><FaLocationDot className="h-8 w-8"/></div>

            <div>
                <div className="text-white text-2xl">Address</div>
                <div className="mt-1">P-182 street # 7 Sohailabad near Batala Colony, Faisalabad</div>
            </div>
          </div>

          </div>


          <div className="mt-10 text-2xl lg:w-[40vw]">Visit my Social Profile and get Connected</div>

          <div className="flex text-white gap-4 ms-3 mt-6">
              {
                items.map((item, index) =>(
                  <div key={index} className="flex cursor-pointer group/item  border border-gray-500 p-4  rounded-full gap-2">
                  <img src={item.img} alt="" className="h-6 w-6" />
                  <a href={item.url} className="hidden group-hover/item:block group-hover/item:pr-5">{item.data}</a>
                  </div>
                ))
              }
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
