
// import cup from "../assets/cup (1).png"
import { FaFacebook } from "react-icons/fa6";
 import { FaInstagram } from "react-icons/fa";
 import { FaLinkedin } from "react-icons/fa6";
 import { LuTwitter } from "react-icons/lu";



// const Footer  = () =>  {
// return(
//  <section>
//     <div className="2xl:container mx-auto  ">
//         <div className="w-[99%] mx-auto flex   justify-between bg-black " >
//             <div className=" flex items-center mx-10" >
//                 {/* <img src={cup} className="w-9  hover:scale-110"></img> */}
//               <p className="text-pink-600  font-serif text-bold  hover:transition-all duration-500 hover:scale-110 hover:text-blue-700  
//               ">TWIN BIRDS </p>
//             </div> 
//          <div className="my-10">
//             <p className="text-white">Follow Us</p>
//            <div className="text-3xl flex items-center gap-4 text-white mt-2 mx-10 ">
//              <FaFacebook />
//              <FaInstagram />
//              <FaLinkedin />
//              <LuTwitter />
//             </div>
//           </div>
         
//        </div>
//     </div>
//   </section>
// );   
// };

import React from "react"

const Footer =()=> {
  return(
    <footer className="2xl:container mx:auto p-4 bg-black  md:p-8 lg:p-10 dark:bg-gray-800">
  <div className=" mx-auto max-w-screen-xl text-center">
   <div className=" mx:auto text-2xl justify-center items-center  font-bold uppercase ">
          {/* <img src={cup} className="w-9 mx-10  hover:scale-110"></img>  */}
            <p className="text-pink-600  font-serif text-bold  hover:transition-all duration-500 hover:scale-110 hover:text-blue-700   
  ">TWIN BIRDS </p>
           
          </div>
  
    <p className="my-6 text-white dark:text-white-400">
      Open-source library of over 400+ web components and interactive elements
      built for better web.
    </p> 
    <ul className="flex flex-wrap justify-center items-center mb-6 text-white">
      <li>
        <a href="#" className="mr-4 hover:underline  hover:text-pink-600 md:mr-6 ">
          About
        </a>
      </li>
      <li>
        <a href="#" className="mr-4 hover:underline  hover:text-pink-600 md:mr-6">
          Premium
        </a>
      </li>
      <li>
        <a href="#" className="mr-4 hover:underline  hover:text-pink-600 md:mr-6 ">
          Campaigns
        </a>
      </li>
      <li>
        <a href="#" className="mr-4 hover:underline  hover:text-pink-600 md:mr-6">
          Blog
        </a>
      </li>
      <li>
        <a href="#" className="mr-4 hover:underline  hover:text-pink-600 md:mr-6">
          Affiliate Program
        </a>
      </li>
      <li>
        <a href="#" className="mr-4 hover:underline   hover:text-pink-600 md:mr-6">
          FAQs
        </a>
      </li>
      <li>
        <a href="#" className="mr-4 hover:underline  hover:text-pink-600 md:mr-6">
          Contact
        </a>
      </li>
    </ul>
    <div className="text-3xl flex justify-center items-center py-2 gap-4   text-white mt-2 mx-10 ">
           <p className="text-white p-2 text-2xl  hover:text-white  hover:bg-pink-600 rounded-full">  <FaFacebook /></p>
           <p className="text-white p-2 text-2xl  hover:text-white  hover:bg-pink-600 rounded-full"> <FaInstagram /></p>
           <p className="text-white p-2 text-2xl  hover:text-white  hover:bg-pink-600 rounded-full">  <FaLinkedin /></p>
           <p className="text-white p-2 text-2xl  hover:text-white  hover:bg-pink-600 rounded-full"><LuTwitter /></p>
             </div>
    <span className="text-sm text-white sm:text-center ">
      © 2021-2022{" "}
      <a href="#" className="hover:underline">
        cakeshop
      </a>
      . All Rights Reserved.
    </span>
  </div>
</footer>


  )
};


 export default Footer;
