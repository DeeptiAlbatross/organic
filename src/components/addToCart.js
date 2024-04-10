import React from 'react'
import { useSelector } from 'react-redux';

const AddToCart = () => {
  const cartdata = useSelector((state) => state.cart);
  console.log(cartdata);
  return (
    <div>addToCart</div>
  )
}

export default AddToCart;