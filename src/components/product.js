import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addToCart} from '../store/cartSlice';

const Product = () => {
  const dispatch = useDispatch();

  const Items = [
    {
      name: "Fresh lemon",
      src: require("../assets/lemon.jpg"),
      Quantity: "2*454g / 16oz",
      price: "Rs.80",
    },
    {
      name: "Garlic",
      src: require("../assets/garlic.jpg"),
      Quantity: "2*454g / 16oz",
      price: "50",
    },
    {
      name: "Manngo",
      src: require("../assets/manngo.jpg"),
      Quantity: "2*454g / 16oz",
      price: "70",
    },
    {
      name: "Mint",
      src: require("../assets/mint.jpg"),
      Quantity: "2*454g / 16oz",
      price: "34",
    },
    {
      name: "Orange",
      src: require("../assets/orange.jpg"),
      Quantity: "2*454g / 16oz",
      price: "46",
    },
    {
      name: "Pom",
      src: require("../assets/Pom.jpg"),
      Quantity: "2*454g / 16oz",
      price: "567",
    },
    {
      name: "Strawberry",
      src: require("../assets/strawnb.jpg"),
      Quantity: "2*454g / 16oz",
      price: "78",
    },
    {
      name: "Chilli",
      src: require("../assets/chilli.jpg"),
      Quantity: "2*454g / 16oz",
      price: "78",
    },
    {
      name: "Raw-Onions",
      src: require("../assets/raw.jpg"),
      Quantity: "2*454g / 16oz",
      price: "78",
    },
  ];
  const navigate = useNavigate();

  return (
    <section class="product " id="Products">
      <div class="container ">
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
          {Items?.map((i, index) => (
            <div class="col-lg-4">
              <div class="card rounded px-0 mt-4" data-aos="zoom-in-up">
                <div class="card-body py-0">
                  <div class="star">
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
                    src={i.src}
                    class="img-fluid pb-3"
                    alt=""
                    onClick={() => navigate("/item-details", { state: { i } })}
                  ></img>
                  <h4 class="head1">{i.name} </h4>
                  <p class="per1">2{i.Quantity}</p>
                  <h4 class="head1">{i.price}</h4>
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({i})
                      )
                    }
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
