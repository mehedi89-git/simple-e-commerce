import { Cart } from "./rightPanel/Cart";

export function RightPanel({cart}) {
  return (
    <div>
      <h1>Cart</h1>
      <button className="b1">CheckOut</button>
      <div>
        <Cart cart={cart} />
      </div>
    </div>
  );
}
