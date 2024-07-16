import React from "react";
import CartItem from "../components/CartItems";
import { useStoreContext } from "../utils/GlobalState"; // Assuming you have a global state context

const Cart = () => {
  const [state] = useStoreContext(); // Extract the state from the global context
  const { cart } = state; // Assuming 'cart' is the part of state that holds cart items

  return (
    <div className="signUp">
      <h1>Cart</h1>
  

      {cart.length ? (
        cart.map((product) => (
          <CartItem key={product._id} product={product} />
        ))
      ) : (
        <p>Your cart is empty</p>
      )}

      <button>Checkout</button>
    </div>
  );
};

export default Cart;
