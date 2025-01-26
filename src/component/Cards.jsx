import React from "react";
import white from "../assets/white.png";
import white2 from "../assets/white-2 (2).png"
import white3 from "../assets/white-2 (3).png";
import white4 from "../assets/white-2 (1).png"
import cup from "../assets/cup (1).png";
import cup2 from "../assets/cup (2).png"
import pink from "../assets/pink-choco.png"
import choco from "../assets/color cake.png"
import choco1 from "../assets/choco_white.png"
import choco2 from "../assets/choco str.png"
import pinkbig from "../assets/pink big.png"
import { NavLink } from "react-router-dom";




const CardsData = [
  {
    id: 1,
    title: 'Wedding Cakes',
    link: "/",
    price:"₹599.00/-",
    img:choco,
   
  },
  {
    id: 2,
    title: "Black Forest Cakes",
    link: "/",
    price: "₹450.00/-",
    img:choco1,
  },
  {
    id: 3,
    title: "Cup Cakes",
    link: "/",
    price: "₹50.00/-",
    img:cup,
  },
  {
    id: 4,
    title: "Chocolate Cakes",
    link: "/",
    price: "₹650.00/-",
    img:choco2,
  },
  {
    id: 5,
    title: "Ice Cream Cakes",
    link: "/",
    price: "₹250.00/-",
    img:white,
  },
  {
    id: 6,
    title: "Vennila Cakes ",
    link: "/",
    price: "₹350.00/-",
    img:white2,
  },
  {
    id:7,
    title: "Strawberry Cakes",
    link: "/",
    price: "₹299.00/-",
    img:white3,
  },
  {
    id: 8,
    title: "Strawberry Roll  Cakes",
    link: "/",
    price: "₹150.00/-",
    img:white4,
  },
  {
    id: 9,
    title: "Pink Cup Cake",
    link: "/",
    price: "₹150.00/-",
    img:cup2,
  },
  {
    id: 10,
    title: "Chocolate  Cake",
    link: "/",
    price: "₹150.00/-",
    img:pink,
  },
  {
    id: 11,
    title: "Strawberry Roll  Cakes",
    link: "/",
    price: "₹150.00/-",
    img:white,
  },
  {
    id: 12,
    title: "Strawberry Roll  Cakes",
    link: "/",
    price: "₹150.00/-",
    img:choco1,
  },
];

const Cards = () => {
 return(
  <section>
      <div className="2xl:container mx:auto">
      <h1 className=" py-10 text-center  text-2xl font-serif font-semibold ">
          Top Trending Tastes
          </h1>
          <p className=" pb-10 text-center text-gray-500" >"Life is sweet; Eat dessert first!"<br></br>
            Sweeten every moment with our bakery delights!..
          </p>
          <NavLink to="/ProductDetails" className="" >

        <div className=" w-[90%] mx:auto text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mx-10">
        
            {CardsData.map ((Cards)=>(
              <div className=" bg-white  border border-black rounded-3xl  px-9 py-2 w-150 hover:bg-pink-300  hover:text-pink-700 shadow-[0_0_5px] hover:border-pink-600 hover:transition-all duration-500 hover:scale-110">
              <img src={Cards.img} alt="img"  className="h-290px"/>
            

                    <div className="">
                    <h1 className="font-bold ">{Cards.title}</h1>
                    <p>{Cards.price}</p>
                </div>
              </div>
            ),
            )}

        </div>
        </NavLink>
      </div>
    </section>
  );
};
export default Cards;
