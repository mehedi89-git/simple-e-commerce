
import { useProducs } from "../../api/queries";
import { useEffect, useState } from "react";

import { ProductCart } from "./ProductCart";

import "./ProductGrid.css";

 

export const ProductGrid = () => {
  const [products, setProducts] = useState([])
  useEffect( () => {
     fetch('http://localhost:5000/api/products')
     .then(res => res.json()).then((data) =>
       setProducts(data))
      }, []);
 
  
   // const { products } = useProducts()
   
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
