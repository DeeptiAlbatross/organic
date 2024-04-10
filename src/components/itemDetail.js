import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import  Slider  from "react-slick";

const ItemDetail = () => {

  const { state } = useLocation();
  console.log(state);
 
  const setting={
    dots:false,
    infinite:false,
    speed:500,
    slidesToShow:4,
    slidesToScroll:1,
    fade:false,
    arrows:true
  };

  return (
    <section className="detailsPage">
      <div className="details mb-4">
        <div className="container-fluid">
          <ul className="nav mb-4">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Pictures</Link>
            </li>
            <li>
              <Link>Summer15</Link>
            </li>
            <li>Here</li>
          </ul>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 part1">
            <div className="row">
              <div className="col-md-3 productZoom">
                <div className="productZoom">
                 <InnerImageZoom  zoomType="hover" zoomScale={2} src="https://healthyfamilyproject.com/wp-content/uploads/2020/05/Pomegranate-background.jpg"/>
                </div>


                <Slider {...setting} className='zoomSlider'>
                  <div className="item">
                    <img src='https://www.thedailymeal.com/img/gallery/is-the-pomegranate-the-most-seductive-fruit-of-them-all/intro-1675456789.jpg' className="w-100"></img>
                  </div>
                  <div className="item">
                    <img src='https://i.pinimg.com/736x/cd/06/f3/cd06f3b4632be7758d016c533137e9b1.jpg' className="w-100"></img>
                  </div>
                  <div className="item">
                    <img src='https://media.istockphoto.com/id/186548424/photo/pomegranate.jpg?s=612x612&w=0&k=20&c=IM6MPkr4hCp9jsaXMJ5cOsfeLfni31HV3cIqGLjroVQ=' className="w-100"></img>
                  </div>
                  <div className="item">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-i9b_gxunZh1iZOr1i7vCkG0IISPW01n480q7aOnHABK5pRM3OkioDumk5LD0SOMyou8&usqp=CAU' className="w-100"></img>
                  </div>
                  <div className="item">
                    <img src='https://www.savoryexperiments.com/wp-content/uploads/2020/05/pomegranate.jpg' className="w-100"></img>
                  </div>
                  </Slider>
              </div>
              </div>

              
              <div className="col-md-9 productInfo">
                   <h1> Fresh Organes from the farm directly</h1>
                   <div className="starDetails d-flex align-items-centre mb-4">
                   <span>
                      <i class="bi bi-star-fill"></i>
                    </span>
                    <span>
                      <i class="bi bi-star-fill"></i>
                    </span>
                    <span>
                      <i class="bi bi-star-fill"></i>
                    </span>
                    <span>
                      <i class="bi bi-star-fill"></i>
                    </span>
                    <span>
                      <i class="bi bi-star-fill"></i>
                    </span>
                    <span className="reviews text-dark"> (32 Reviews)</span>
                    </div>
                    <div className="priceSection d-flex align-items-centre mb-3">
                         <span className="text-g priceLarge">Rs.65</span>
                         <div className="ml-2 d-flex flex-colomn">
                          <span className="text-org">26% Off</span>
                          <span className="text-light oldPrice">Rs.89</span>
                         </div>
                    </div>
                    <p>Mango a super healthy fruit which supports immune system, low in calories, rich in healthy plant compounds. Todays Mango price in Delhi is ₹ 110.00 per Kg .</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 part2"></div>
        </div>
    </section>
  );
};

export default ItemDetail;
