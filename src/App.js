import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from "./components/about";
import Contact from "./components/contact";
import NewArrival from "./components/newArrival";
import Product from "./components/product";
import Discount from "./components/discount";
import NavBar from "./components/navbar";
import Services from "./components/services";
import Features from "./components/features";
import { useEffect, useState } from "react";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

 const paraStyle={
    WebkitLineClamp:3,
    WebkitBoxOrient:'vertical',
    overflow:"hidden",
    display:'-webkit-box',
  
 }

function App() {
  const router=createBrowserRouter([
    {
       path:"/",
       element: <></>
    },
    {
      path:"/about",
      element: <About/>
    },
    {
      path:"/contact",
      element: <Contact/>
    },
    {
      path:"/discount",
      element: <Discount/>
    },
     {
      path:"/features",
      element: <Features/>
    }
    , {
      path:"/newarrival",
      element: <NewArrival/>
    },
    {
      path:"/products",
      element: <Product/>
    },
    {
      path:"/services",
      element: <Services/>
    }
  ])
    
  const [isOpen,setIsOpen]=useState(false);

  useEffect(()=>{
  AOS.init({duration:1000})
  },[]);

  return <>
  <RouterProvider router={router}/>
  <NavBar/>
  <section class="main py-5" id="Home">
      <div class="container py-5" data-aos="zoom-in">
        <div class="row py-5">
          <div class="col-lg-6 py-5">
            <p class="m-0">Organic products</p>
            <h1 >Fresh Organic</h1>
            <div class="line my-4"></div>
            <p style={ isOpen ? null:paraStyle}
              >Organic food id food and drinks produced by methods complying with the standards of the organic farming.
              Standards vary worldwide,but organic farming features practices that cycle resources.
              sdfxghjklrdftgyhuijkkodjfecnhrinuyehroiwejrlkmqwcrjerwuvgteruythgwoeiurhmowperxjewkjthe
              xercweg rcywecgriojehrtoiuerhuyer gvtuhnxqwjhenxewijrhfcgeriuybtbgerwuythgnexqplkxjd
              exhrgweh r fgrejgf rshgweruneqjrhewj
              whewg hwegrcwerh ewpijrfh
            </p>
            <button onClick={() => setIsOpen(!isOpen)} class="mbtn1 mt-4 ">{isOpen ?'Read less..':'Read more....'}</button>
            <button class="mbtn2">Shop now</button>
          </div>
        </div>
      </div>
    </section>
    
    <About/>
    <Features/>
    <Product/>
    <Discount/>
    <Services/>
    <NewArrival/>
    <Contact/>


  </>;
}

export default App;
