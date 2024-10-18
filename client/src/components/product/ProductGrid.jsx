import axios from 'axios'

import { useEffect, useState } from "react";

import { ProductCart } from "./ProductCart";

import "./ProductGrid.css";

 

export const ProductGrid = () => {
  const [products, setProducts] = useState([])
  useEffect( () => {
      axios.get('http://localhost:5000/api/products').then((res) =>
        setProducts(res.data))   
      .catch((err) => {
        alert("Failed to load products!");
        console.error(err)
      })

   
      }, []);
 
  
  //  const { products } = useProducts()
   
  return (
    <div className="productGrid">
      {products.map((product) => (
        <ProductCart
         key={product.id} 
         product={product} />
      ))}
    </div>
  )
}
