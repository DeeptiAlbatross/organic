import React from 'react'

const services = () => {
    const Items=[
        {name:"Free shipping",src:require("../assets/lemon.jpg") ,Quantity:"With Rs100 or more orders, Go to Oars store",price:"Rs.80"},
        {name:"Less discount",src:require("../assets/garlic.jpg"),Quantity:"With items abovethan Rs 200 get 10% od discount",price:"50"},
        {name:"Free delivery",src:require("../assets/manngo.jpg"),Quantity:"Free delivery within the range of 10 km",price:"70"},

    
    ]
  return (
    <section class="store py-5 bg-success text-center mx-20" id="Services">
      <div class="conatiner py-5">
        <div class="row">
          <div class="col-lg-6 m-auto">
            <p class="m-0">Green agriculture</p>
            <h1>Our Best Products</h1>
            <div class="line  my-4"></div>
            <p> We call it ultimate because we simply believe every website we call it 
             ultimate because  we simply believes that every website needs to be well presented at the </p>
          </div>
        </div>
        <div class="d-flex justify-content-center">
            {Items?.map((i,index)=><div class="col-lg-3 mt-2  px-2">
            <div class="card py-3"data-aos="fade-down"
             data-aos-easing="linear"
             data-aos-duration="1500">
              <div class="card-body">
                <span><i class="bi bi-truck"></i></span>
                <h5 class="head1 py-3"> {i.name}</h5>
                <p class="per1">{i.Quantity}</p>
              </div>
            </div>
          </div>)}
        
        </div>
      </div>
    </section>
  )
}

export default services