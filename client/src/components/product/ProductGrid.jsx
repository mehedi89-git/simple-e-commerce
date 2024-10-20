<<<<<<< HEAD

import { useProducs } from '../../api/queries';
=======
import axios from 'axios'

import { useEffect, useState } from "react";
>>>>>>> 539d9d8e592086992f4fed6ada50d28efed9a527

import { ProductCart } from "./ProductCart";

import "./ProductGrid.css";


 

export const ProductGrid = () => {
<<<<<<< HEAD
 const { products } = useProducs()
=======
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
>>>>>>> 539d9d8e592086992f4fed6ada50d28efed9a527
   
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
