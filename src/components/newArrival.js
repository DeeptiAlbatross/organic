import React from 'react'

const newArrival = () => {
    const Items=[
    {name:"Fresh lemon",src:require("../assets/lemon.jpg") ,Quantity:"2*454g / 16oz",price:"Rs.80"},
    {name:"Garlic",src:require("../assets/garlic.jpg"),Quantity:"2*454g / 16oz",price:"50"},
    {name:"Manngo",src:require("../assets/manngo.jpg"),Quantity:"2*454g / 16oz",price:"70"},
    {name:"Mint",src:require("../assets/mint.jpg"),Quantity:"2*454g / 16oz",price:"34"},
    {name:"Orange",src:require("../assets/orange.jpg"),Quantity:"2*454g / 16oz",price:"46"},
    {name:"Pom",src:require("../assets/Pom.jpg"),Quantity:"2*454g / 16oz",price:"567"},
    {name:"Strawberry",src:require("../assets/strawnb.jpg"),Quantity:"2*454g / 16oz",price:"78"},
    {name:"Chilli",src:require("../assets/chilli.jpg"),Quantity:"2*454g / 16oz",price:"78"}

]

  return (
    <section class="seller bg-dark py-5">
      <div class="container py-3" >
        <div class="row ">
          <div class="col-lg-6">
            <h1 class="py-5">New arrivals</h1>
          </div>
        </div>
        <div class="row g-2 py-1">
         {Items?.map((item,index)=><div class="col-lg-6 p-2" key={index}>
            <div class="card rounded" data-aos="fade-down-left">
              <div class="row ">
                <div class="col-lg-6">
                    <img src={item.src}  class="img-fluid"  alt="image"/></div>

              <div class="col-lg-6 p-5">
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <h5>{item.name}</h5>
                <p class="per1">{item.Quantity+100000}</p>
                <h5 class="head1">{item.price}</h5>
              </div>
            </div>
            </div>
            
          </div>) }
          
        </div>
      </div>
    </section>
  )
}

export default newArrival