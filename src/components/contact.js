import React from 'react'

const contact = () => {
  return (
    <section class="contact py-5" id="Contact">
      <div class="container py-5 bg-success rounded  "data-aos="zoom-in">
        <div class="row py-5">
          <div class="col-lg-7 py-5 offset-lg-1 col-md-6 col-sm-12 col-12">
            <h4 class="m-0">Green agriculture</h4>
            <h1>Contact us</h1>
            <div class="line my-4"></div>
            <h2> We call it ultimate because we simply believe in it.</h2>
          </div>
        </div>
        <div class="row py-3">
          <div class="col-lg-6">
            <div class="row pt-2">
              <div class="col-lg-1 col-sm-3 col-2 offset-lg-2">
                <div class="circle">
                  <span><i class="bi bi-geo-alt-fill"></i></span>
                </div>
              </div>
                <div class="col-lg-8 col-sm-8 col-8 pt-2"> 
                  <h4 class="text-centre">Sector 14,Kheriya ,Fatehabad Road,A=gra</h4>
                </div>
              </div>
              
                <div class="row pt-2">
                  <div class="col-lg-1 col-sm-3 col-2 offset-lg-2">
                    <div class="circle">
                      <span><i class="bi bi-telephone-forward"></i></span>
                    </div>
                  </div>
                    <div class="col-lg-8 col-sm-8 col-8 pt-2"> 
                      <h4 class="text-centre">+91-9719429066,</h4>
                    </div>
                  </div>
                  <div class="row pt-2">
                    <div class="col-lg-1 col-sm-3 col-2 offset-lg-2">
                      <div class="circle">
                        <span><i class="bi bi-envelope-check"></i></span>
                      </div>
                    </div>
                      <div class="col-lg-8 col-sm-8 col-8 pt-2"> 
                        <h4 class=" text-centre">foodOrganic123@gmail.com</h4>
                      </div>
                    </div>
                   
                    </div>
                  {/* <div class="col-lg-6">
                    <input type="text" placeholder="Name..."/>
                    <input type="text" placeholder="Phone no..."/>
                    <input type="text" placeholder="Email..."/>
                    <textarea name="" id="" placeholder=" Message us..."></textarea>
                    <button class="cbtn mt-3">Send Now</button>
                  </div> */}
              </div>
            </div>
          </section>
  )
}

export default contact