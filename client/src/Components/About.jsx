import React, { useState, useEffect } from "react";
import "./About.css";
import ImgOne from "../assets/About/1.jpg";
import ImgTwo from "../assets/About/2.jpg";
import ImgThree from "../assets/About/3.jpg";
import ImgFour from "../assets/About/4.jpg";
import ImgFive from "../assets/About/5.jpg";
import ImgSix from "../assets/About/6.jpg";

const images = [ImgOne, ImgTwo, ImgThree, ImgFour, ImgFive, ImgSix];

function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500); // Change image every 2.5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      className="about-container"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      {/* Dark Overlay */}
      <div className="about-overlay"></div>

      {/* Content */}
      <div className="content">
        <h1 className="text-[#FF8F0F] text-[36px] tablet:text-[28px] font-extrabold">
          About the August
        </h1>
        <h2 className="text-white text-[30px] tablet:text-[24px] font-semibold">
          UI/UX Designer and Project Manager
        </h2>
        <p className="text-white text-[24px] tablet:text-[18px] font-medium">
          As a creative problem solver, I’m passionate about crafting good user
          experiences that delight and inspire. With a strong foundation in
          design principles and project management, I excel in collaborative
          environments, driving projects from concept to launch.
        </p>
        <button className="bg-[#FF8F0F] text-white rounded-[15px] py-2 px-6 hover:shadow-2xl cursor-pointer font-medium text-[30px] tablet:text-[24px]">
          View More
        </button>
      </div>
    </div>
  );
}

export default About;
