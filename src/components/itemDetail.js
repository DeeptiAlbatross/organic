import axios from "axios";
import React,{useState,useEffect} from 'react ';
import { useParams } from "react-router-dom";

 const UseProductView=()=>{
  const{id:productId}=useParams;
  const{product,setProduct}=useParams;
  const{selectQuantity,setSelectedQuantity}=useParams;

   const handleQunatityChange =({target:{value}})=>{
    setSelectedQuantity(value);
   };
 
   useEffect(()=>{
    const fetchCategories=async()=>{
      try{
        const{
           data:{data},
          } =await axios.get('htpp://localhost:3000/${productId}?populate=*');
          setProduct(data);
      }
      catch (error){
        console.log({ error});
      }
     };
    if(productId){
      fetchCategories()
    }
   },[productId]);


   return
   {
    product,
    selectQuantity,
    handleQunatityChange,
   };
};
export default UseProductView;