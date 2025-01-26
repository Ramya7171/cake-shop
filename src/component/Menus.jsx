import React from "react";
import { LuCake } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { IoStarHalfOutline } from "react-icons/io5";




const MenuData = [
  {
    id: 1,
    title: "40+",
    link: "",
    price: "Orders",
    icon:MdOutlineShoppingCart,
    
  },
  {
    id: 2,
    title: "25 Years",
    link: "/",
    price: "Exprience",
    
  },
  {
    id: 3,
    title: "140K",
    link: "/",
    price: "Customers",
    
  },
  {
    id: 4,
    title: "50+",
    link: "/",
    price: "Cakes",
    img:LuCake,
  },
];

const Menus = () => {
  return(
   <section>
       <div className="2xl:container mx:auto">
       
         <div className=" w-[90%] mx:auto text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mx-10">
            
         
             {MenuData.map ((Menus)=>(
               <div className=" bg-white  border border-black rounded-3xl  px-9 py-2 w-15     hover:transition-all duration-500 hover:scale-110 ">
                       

               <MdOutlineShoppingCart/>
               <IoStarHalfOutline/>
               <FaUserEdit/>
               <LuCake/>

               
 
               <div className="">
                     <h1 className="font-bold ">{Menus.title}</h1>
                     <p>{Menus.price}</p>
                     </div>
               </div>
             ),
             )}
 
         </div>
       </div>
     </section>
   );
 };
export default Menus;
