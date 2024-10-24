import { useEffect, useState } from "react";

import { productServices } from "../services";


export const useProducs = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])
    
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const products = await productServices.getProducts()
        setProducts(products)
      } catch (error) {
        alert('failed to load products!')
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    };
    
    useEffect( () => {
       loadProducts()
      }, []);
     return { isLoading, products };
}
