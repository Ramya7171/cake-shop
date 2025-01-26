import React from "react";
import Heropng from "../assets/pink big.png";
import { NavLink } from "react-router-dom";



const Hero = () => {
  return (
    <section>
      <div className="2xl:container mx:auto bg-pink-50 grid grid-cols-1 md:grid-cols-2 min-0-[650px]:">
        <div className=" w-[90%] flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]:">
            <h1 
  
            className="text-5xl lg:text-4xl font-bold mx-10 font-serif my-10">
              Yummy sweeties delivered<br></br>
              to your dining table...!!
            </h1>
            <p className="mx-10 text-gray-900">Order Now For Fresh Cakes</p>
            <p className="mx-10  text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ipsa labore vero iure dicta. Odio vitae, voluptate
              optio, debitis perspiciatis fugiat voluptatum sint non eos atque .
            </p>
          
            <button className="border-spacing-1 font-semibold hover:text-white  hover:bg-pink-600 rounded-full py-3 px-6 mx-10 shadow-[0px_10px_14px_-7px_#de0029]"><NavLink to="/ProductDetails" className="" >

            Order Now</NavLink>
           </button>
          
      
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={Heropng} alt="cake-img"  className="w-[350px] hover:transition-all duration-500 hover:scale-110"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
