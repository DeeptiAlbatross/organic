import "../App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from "./about";
import Contact from "./contact";
import NewArrival from "./newArrival";
import Product from "./product";
import Discount from "./discount";
import Services from "./services";
import Features from "./features";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import ItemDetails from './itemDetail';

 const paraStyle={
    WebkitLineClamp:3,
    WebkitBoxOrient:'vertical',
    overflow:"hidden",
    display:'-webkit-box',
  
 }

function App() {

  const [isOpen,setIsOpen]=useState(false);
  

  useEffect(()=>{
  AOS.init({duration:1000})
  },[]);

  return <>
 
  <Navbar/>
  <section class="main py-5" id="Home">
      <div class="container py-5" data-aos="zoom-in">
        <div class="row py-5">
          <div class="col-lg-6 py-5">
            <p class="m-0">Organic products</p>
            <h1 >Fresh Organic</h1>
            <div class="line my-4"></div>
            <p style={ isOpen ? null:paraStyle}
              >
              Welcome to Fresh Harvest Organics!
              
              At Fresh Harvest Organics, we are dedicated to providing you with the highest quality organic food, sourced directly from local farmers who share our commitment to sustainable farming practices and environmental stewardship.
              <br></br>Our mission is simple: to make wholesome, nutritious, and delicious organic food accessible to everyone while supporting local agriculture and promoting a healthier planet.
            </p>
            <button onClick={() => setIsOpen(!isOpen)} class="mbtn1 mt-4 ">{isOpen ?'Read less..':'Read more....'}</button>
          </div>
        </div>
      </div>
    </section>
    
     <About/>
    <Features/>
    <Product/>
    <ItemDetails/>
    <Discount/>
    <Services/>
    <NewArrival/>
    <Contact/> 


  </>;
}

export default App;
