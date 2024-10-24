

import { useProducs } from "../../api/queries";
import { ProductCart } from "./ProductCart";

import "./ProductGrid.css";


 

export const ProductGrid = () => {

   const { isLoading, products } = useProducs();
   
  return (
    <div className="productGrid">
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        products.map((product) => (
        <ProductCart key={product.id} product={product} />
      )) 
      )}
    </div>
  );
}
