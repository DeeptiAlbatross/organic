import React from 'react'
import { useLocation } from 'react-router-dom';

const ItemDetail = () => {
  const {state}=useLocation();
  console.log(state);
  return (
    <div>Item Detail</div>
  )
}

export default ItemDetail;