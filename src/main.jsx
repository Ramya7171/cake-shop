// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from "./component/Navbar/";
import Hero from "./component/Hero";
import Cards from "./component/Cards";
import Last from "./component/Last";
// import Footer from "./component/Footer/Footer";
import {BrowserRouter, RouterProvider } from "react-router-dom";





const Body=() =>{
  return(
    <>
    <Hero/>
    <Cards/>
    <Last/>
    </>
  )
}



// const Applayout =()=>{
//   return(
// <>
// <Navbar/>
// <Outlet/>
// <Footer/>
// </>
//   ),
// };

// const AppRouter = CreateBrowserRouter ([
//  {
// path:"/",
// element:<Applayout/>,
// children:
//     [
//       {
//       path:"/",
//       element:<Last/>,
    
//        },
      
// {
//           path:"/ProductDetail/:id",
//           element: <ProductDetail/>,
//            },
    
//     ],
//   },
// ],
// );

// const root=ReactDOM.createRoot(document.getElementById ("root"));
// root.render(<RouterProvider router={AppRouter}/>)


createRoot(document.getElementById('root')).render(
   <BrowserRouter>
  
          <App />
          {/* <RouterProvider router={AppRouter}/> */}
  
    
   </BrowserRouter>, 
  
);
