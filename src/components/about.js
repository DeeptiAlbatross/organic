import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const paraStyles={
  WebkitLineClamp:3,
  WebkitBoxOrient:'vertical',
  overflow:"hidden",
  display:'-webkit-box',

}

const About = () => {
  const navigate=useNavigate();
  const [isReallyOpen,setIsOpen]=useState(false);
  return (
    
    <section class="about py-5" id='About'>
      <div class="container py-5" data-aos="zoom-in">
        <div class="row py-5">
          <div class="col-lg-5 py-5 offset-lg-7 col-md-6 col-sm-12 col-12">
            <p class="m-0">Organic products</p>
            <h1>About our Organic</h1>
            <div class="line my-4"></div>
            <p style = { isReallyOpen ? null:paraStyles}
              >
              Welcome to GreenGrove Organics!
              
              At GreenGrove Organics, we're passionate about bringing you the finest selection of organic food products straight from nature's bounty. Our commitment to sustainability, quality, and health guides everything we do.
              Organic farming practices prioritize the health of our planet. By choosing organic, you're saying yes to food that's free from synthetic pesticides, and harmful chemicals. You're also supporting farmers who work in harmony with nature, biodiversity, and water quality.
              Experience the GreenGrove Organics difference today and taste the freshness of nature in every bite!
              
            </p>

            <button  onClick={() =>navigate('/about')}  class="mbtn1 mt-4">Know more..</button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About;