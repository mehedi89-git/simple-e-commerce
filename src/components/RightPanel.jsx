import { Cart } from "./rightPanel/Cart";

export function RightPanel() {
  return (
    <div>
      <h1>Cart</h1>
      <button className="b1">CheckOut</button>
      <div>
        <Cart cart={Cart} />
      </div>
    </div>
  );
}
