import React from 'react'

const product = () => {
    const Items=[
        {name:"Fresh lemon",src:require("../assets/lemon.jpg") ,Quantity:"2*454g / 16oz",price:"Rs.80"},
        {name:"Garlic",src:require("../assets/garlic.jpg"),Quantity:"2*454g / 16oz",price:"50"},
        {name:"Manngo",src:require("../assets/manngo.jpg"),Quantity:"2*454g / 16oz",price:"70"},
        {name:"Mint",src:require("../assets/mint.jpg"),Quantity:"2*454g / 16oz",price:"34"},
        {name:"Orange",src:require("../assets/orange.jpg"),Quantity:"2*454g / 16oz",price:"46"},
        {name:"Pom",src:require("../assets/Pom.jpg"),Quantity:"2*454g / 16oz",price:"567"},
        {name:"Strawberry",src:require("../assets/strawnb.jpg"),Quantity:"2*454g / 16oz",price:"78"},
        {name:"Chilli",src:require("../assets/chilli.jpg"),Quantity:"2*454g / 16oz",price:"78"},
        {name:"Raw-Onions",src:require("../assets/raw.jpg"),Quantity:"2*454g / 16oz",price:"78"}

    
    ]

  return (
    <section class="product ">
    <div class="container ">
      <div class="row py-5 text-center">
        <div class="col-lg-6 m-auto">
          <p class="m-0">Green agriculture</p>
          <h1>Our Best Products</h1>
          <div class="line  my-4"></div>
          <p> We call it ultimate because we simply believe every website we call it 
           ultimate because  we simply believes that every website needs to be well presented at the </p>
         </div>
      </div>
      <div class="row">
       { Items?.map((i,index)=><div class="col-lg-4">
          <div class="card rounded px-0 mt-4"data-aos="zoom-in-up">
            <div class="card-body py-0" >
              <div class="star"> 
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
              </div>
              <img src={i.src}  class="img-fluid pb-3" alt=""></img>
               <h4 class="head1">{i.name} </h4>
              <p class="per1">2{i.Quantity}</p>
              <h4 class="head1">{i.price}</h4>
              <button class="btnc my-4" >ADD TO CART</button>
            </div>
          </div>
        </div>)}
        {/* <div class="col-lg-4">
          <div class="card p-2">
            <div class="card-body">
              <div class="star"> 
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
              </div>
              <img src="./images/mint.jpg" class="img-fluid pb-3" alt=""></img>
               <h4 class="head1">Mint </h4>
              <p class="per1">2*454g / 16oz</p>
              <h4 class="head1">Rs.60</h4>
              <button class="btnc my-4" >ADD TO CART</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card p-2">
            <div class="card-body">
              <div class="star"> 
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
              </div>
              <img src="./images/papaya.jpg" class="img-fluid pb-3" alt=""></img>
               <h4 class="head1">Papaya </h4>
              <p class="per1">2*454g / 16oz</p>
              <h4 class="head1">Rs.70</h4>
              <button class="btnc my-4" >ADD TO CART</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card p-2">
            <div class="card-body">
              <div class="star"> 
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
              </div>
              <img src="./images/chilli.jpg" class="img-fluid pb-3" alt=""></img>
               <h4 class="head1">Chilli </h4>
              <p class="per1">2*454g / 16oz</p>
              <h4 class="head1">Rs.334</h4>
              <button class="btnc my-4" >ADD TO CART</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card p-2">
            <div class="card-body">
              <div class="star"> 
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
              </div>
              <img src="./images/Pom.jpg" class="img-fluid pb-3" alt=""></img>
               <h4 class="head1">GApple </h4>
              <p class="per1">2*454g / 16oz</p>
              <h4 class="head1">Rs.240</h4>
              <button class="btnc my-4" >ADD TO CART</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card p-2">
            <div class="card-body">
              <div class="star"> 
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
              </div>
              <img src="./images/strawnb.jpg" class="img-fluid pb-3" alt=""></img>
               <h4 class="head1">Garlic </h4>
              <p class="per1">2*454g / 16oz</p>
              <h4 class="head1">Rs.34</h4>
              <button class="btnc my-4" >ADD TO CART</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card p-2">
            <div class="card-body">
              <div class="star"> 
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
              </div>
              <img src="./images/lemon.jpg" class="img-fluid pb-3" alt=""></img>
               <h4 class="head1">Lemon</h4>
              <p class="per1">2*454g / 16oz</p>
              <h4 class="head1">Rs.76</h4>
              <button class="btnc my-4" >ADD TO CART</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card p-2">
            <div class="card-body">
              <div class="star"> 
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
              </div>
              <img src="./images/manngo.jpg" class="img-fluid pb-3" alt=""></img>
               <h4 class="head1">Mango</h4>
              <p class="per1">2*454g / 16oz</p>
              <h4 class="head1">Rs.96</h4>
              <button class="btnc my-4" >ADD TO CART</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card p-2">
            <div class="card-body">
              <div class="star"> 
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
              </div>
              <img src="./images/melon.jpg" class="img-fluid pb-3" alt=""></img>
               <h4 class="head1">Melon</h4>
              <p class="per1">2*454g / 16oz</p>
              <h4 class="head1">Rs.80</h4>
              <button class="btnc my-4" >ADD TO CART</button>
            </div>
          </div>
        </div> */}
        <div class="row text-center py-5">
          <div class="col-lg-6 m-auto">
            <button class="mbtn1">Read More</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default product