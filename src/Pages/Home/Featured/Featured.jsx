import React from "react";
import SectionTitle from "../../../Components/Sectiontitle/SectionTitle";
import "./Featured.css";
import featured from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="featured-items pt-8 my-20 bg-fixed bg-slate-500 bg-opacity-10"
      style={{ color: " #FFFFFF" }}
    >
      <SectionTitle
        subheading={"check it out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center py-20 pt-12 px-36 ">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-10 font-normal">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where Can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            aliquam tenetur cum voluptates adipisci facere repellat illum,
            cumque obcaecati ea, deserunt dignissimos maxime assumenda qui
            blanditiis! Eius, consequuntur expedita distinctio vel quod
            molestias, accusantium fugiat incidunt ducimus fugit, nulla deleniti
            doloremque necessitatibus? Dicta nemo perspiciatis iste quos dolores
            blanditiis dolor?
            <p>
              <button className="btn btn-outline border-0 border-b-4 mt-4">
                Order Now
              </button>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
