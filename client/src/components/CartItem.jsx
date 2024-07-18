import React from 'react';
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../utils/actions";

const CartItem = ({ item }) => {
  const [state, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
  };

  const handleQuantity = (e) => {
    const value = e.target.value
    if (value <= 0) {
      return false
    }
    dispatch({
      type: UPDATE_CART_QUANTITY,
      _id: item._id,
      purchaseQuantity: parseInt(value)
    });
  };

  return (
    <div style={{marginTop: '35px', marginBottom: '35px'}} className="flex-row">
      <div>
        <img
          src={`${item.images[0]}`}
          style={{ maxWidth: '15%' }}
        />
      </div>
      <div className="flex-column">
        <div><h4>{item.name}</h4> <strong>${item.price}</strong></div>
        <div className="flex-row align-center">
          <span>Qty:</span>
          <input
            type="number"
            value={item.quantity}
            onChange={handleQuantity}
          />
          <span
            role="button"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
            style={{ cursor: 'pointer', marginLeft: '1rem' }}
          >
            🗑️
          </span>
            <div>Size: {item.size}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
