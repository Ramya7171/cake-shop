import React, { useState } from "react";
import cup from "../assets/cup (1).png"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
// import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";



//navbar............
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [click,setClick]=useState (false)
  // const handleClick=()=>setClick(!click)
  // const closeMenu=()=>setClick (false)
  const user=true;
    return (
    <nav>
      <div className="2xl:container mx:auto flex justify-between items-center py-4 px-4 bg-slate-700">
        <div className=" mx:auto text-2xl flex items-center  font-bold uppercase ">
        <img src={cup} className="w-9 mx-10  hover:scale-110"></img> 
          <p className="text-pink-600  font-serif text-bold  hover:transition-all duration-500 hover:scale-110 hover:text-blue-700   
">TWIN BIRDS </p>
         
        </div>
        <div className="">
          <ul className="flex items-center gap-4">
            <li className="inline-block py-1 px-3 text-white hover:text-white  hover:bg-pink-600 rounded-full cursor-pointer"><Link to="/Home" spy={true} offset={50} smooth={true} duration={500} >Home</Link></li>
            <li className="inline-block py-1 px-3 text-white hover:text-white  hover:bg-pink-600 rounded-full cursor-pointer"><Link to="/About" smooth={true} duration={500}>About</Link></li>
            <li className="inline-block py-1 px-3 text-white hover:text-white  hover:bg-pink-600 rounded-full cursor-pointer"><Link to="/Card" >Product</Link></li>
            <li className="inline-block py-1 px-3 text-white hover:text-white  hover:bg-pink-600 rounded-full cursor-pointer"><Link to="/Contact" >Contact Us</Link></li>
            <p className="text-white p-2 text-2xl hover:text-white  hover:bg-pink-600 rounded-full"><IoSearchSharp /></p>
                <p className="text-white p-2 text-2xl hover:text-white  hover:bg-pink-600 rounded-full"><AiOutlineShoppingCart />
                </p>  
<button className="text-pink-600 border border-pink-600 py-1 px-6">Login</button>
          </ul>
          </div>
          </div>
        
    </nav>
  );
};
export default Navbar;
