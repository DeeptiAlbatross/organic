import { useNavigate } from "react-router-dom";
import React, { useEffect} from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { addProductItems } from "../store/productSlice";
import { useSelector } from "react-redux";


const Product = () => {
  const dispatch = useDispatch();
  const { productItems} = useSelector((state) => state.product);

  const navigate = useNavigate();
  const handleNavigation = (id) => {
    navigate(`/item-details/${id}`);
  };

  const callApi = async () => {
    let apiData = await fetch("https://dummyjson.com/products");
    const json = await apiData.json();
    dispatch(addProductItems(json.products));
  };

  useEffect(() => {
    callApi();
  }, []);


  return (
    <section class="product " id="Products">
      <div class="container">
        <div class="row py-5 text-center">
          <div class="col-lg-6 m-auto">
            <p class="m-0">Green agriculture</p>
            <h1>Our Best Products</h1>
            <div class="line  my-4"></div>
            <p>
              {" "}
              We call it ultimate because we simply believe every website we
              call it ultimate because we simply believes that every website
              needs to be well presented.
            </p>
          </div>
        </div>
        <div class="row">
          {productItems?.map((i, index) => (
            <div key={i?.id} class="col-lg-4">
              <div class="card rounded px-0 mt-4" data-aos="zoom-in-up">
                <div class="card-body py-0">
                  <div class="star  ">
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
                  </div>
                  <img
                    src={i?.thumbnail}
                    class="img-fluid pb-3"
                    alt=""
                    onClick={() => handleNavigation(i.id)}
                  ></img>
                  <h4 class="head1">{i?.title} </h4>
                  <h4 class="head1">{i?.price}</h4>
                  <p class="per1">{i?.description}</p>
                  <button
                    onClick={() => dispatch(addToCart({ i }))}
                    class="btnc my-4"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div class="row text-center py-5">
            <div class="col-lg-6 m-auto">
              <button class="mbtn1">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
