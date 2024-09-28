   import "./ProductCart.css";
   export const ProductCart = ({ productName, productPrice }) => {
      return (
    
        <div className="productCart">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5dyT8FEm-Khi_NBX4-sYdtIUo8EOmxe62eQ&s"
           alt="product-img"
           width="300px" />
          <p>{productName}</p>
          <p>{`$${productPrice}`}</p>
          <button>Add to Cart</button>
        </div>
    
  )
}
