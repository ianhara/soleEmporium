import React from 'react';
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../utils/actions";

const CartItem = ({ item }) => {
  const { productId, name, price, purchaseQuantity, images, size} = item;
  const firstImage = images && images.length > 0 ? images[0]: '';
  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
    }
  };

  return (
    <div className="flex-row">
      <div>
        {firstImage && <img src={firstImage} alt={name} className="cart-item-image"/>}
      </div>
      <div className="flex-column">
        <span>{item.name}</span> 
        <br></br>
        <span>Size: {item.size}</span>
        <br></br>
        <span>${item.price}</span>
        <div className="flex-row align-center">
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="button"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
            style={{ cursor: 'pointer', marginLeft: '1rem' }}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
