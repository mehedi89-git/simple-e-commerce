import { ProductCart } from "./ProductCart";
import "./ProductGrid.css";


export const ProductGrid = ({ products }) => {
   
  return (
    <div className="productGrid">
      {products.map((product) => (
        <ProductCart
         key={product.id} 
         productName={product.name} 
         productPrice={product.price}
         />
      ))}
    </div>
  )
}
