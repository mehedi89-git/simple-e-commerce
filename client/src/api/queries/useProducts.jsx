import { productServices } from "../services";

export const useProducs = () => {
    const products = productServices.getProducts();
     
    return { products };
  }