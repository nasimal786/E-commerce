import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import Products from '../../components/products'
import FeatureCart from '../../components/FeatureCart'
import Stats from '../../components/StatCard'


function Home() {
const [products,setProducts] = useState([])
  useEffect(()=>{
    const fetchProduct = async() =>{
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json()
      setProducts(data)
    }
    fetchProduct()
  },[])
  return (
    <div>
        <Hero />
        <h2 className='text-6xl font-bold text-center mt-20'>Products</h2>
        {products.length ?
        <Products products={products} /> :
        <h1>Loading....</h1>  
      }
        <Products />
        <FeatureCart />
        <Stats />
        
    </div>
  )
}

export default Home