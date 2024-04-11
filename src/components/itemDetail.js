import React,{useEffect} from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch  } from "react-redux";
import { itemDetailReducer,addProductItems } from "../store/productSlice";

const ItemDetail = () => {

  const { itemDetail} = useSelector((state) => state.product);
  const dispatch=useDispatch();

  const params=useParams();
    const callApi=async()=>{
    let apiData = await fetch("https://dummyjson.com/products");
    const json = await apiData.json();
    dispatch(addProductItems(json.products));
    dispatch(itemDetailReducer(params.id));

  };
useEffect(() => {
    callApi();
  }, []);
  return (
    <section className="detailsPage">
      <div className="details mb-4">
        <div className="container-fluid">
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 part1">
            <div className="row">
              <div className="col-md-3 productZoom">
                 <img className ='image' src={itemDetail?.[0]?.thumbnail}/>
              
              </div>
              <button class="buttonx">Add to Cart</button>
              <button class="buttonx">Buy now</button>

              <h1 className="itemName" >{itemDetail?.[0]?.title}</h1>
              </div>

              
              <div className="col-md-9 productInfo">
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

                         <span className="text-g priceLarge">{itemDetail?.[0]?.brand}</span><br></br>
                         <span className="text-g priceLarge">{itemDetail?.[0]?.price}</span>
                         <div className="ml-2 d-flex flex-colomn">
                          <span className="text-org">26% Off</span>
                          <span className="text-light oldPrice">Rs.89</span>
                         </div>
                    </div>
                    <p>{itemDetail?.[0]?.description}</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 part2"></div>
        </div>
    </section>
  );
};

export default ItemDetail;
