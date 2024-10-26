import { useEffect, useState } from "react";

import { productServices } from "../services";


export const useProducs = () => {
    
    const [products, setProducts] = useState([])
    
    const loadProducts = async () => {
      try {
        const products = await productServices.getProducts()
        setProducts(products)
      } catch (error) {
        alert('failed to load products!')
        console.error(error)
      }
    };
    
    useEffect( () => {
       loadProducts()
      }, []);
     return { products };
}
