import axios from "axios";
import { useEffect, useState } from "react";

import { productServices } from "../services";


export const useProducs = () => {
    
    const [products, setProducts] = useState([])
    useEffect( () => {
        axios.get('http://localhost:5000/api/products').then((res) =>
          setProducts(res.data))   
          .catch((err) => {
          alert("Failed to load products!");
          console.error(err)
        })
      }, []);
     return { products };
  }