import React, { useEffect, useState } from "react";
import FeatureCart from "../../components/FeatureCart";

function Product() {
const[category,setCategory] = useState([])
    useEffect(()=>{
        const fetchCategory = async() =>{
            const response = await fetch('https://fakestoreapi.com/products/categories')
            const data = await response.json()
            setCategory(data)
        }
        fetchCategory()
    },[])
  return (
    <>
    
    <FeatureCart cart={category} />
    </>
  );
}

export default Product;
