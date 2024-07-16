import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";

import { useStoreContext } from "../utils/GlobalState";

const CartItem = ({ product }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart =  (product) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: product._id
    });
    idbPromise('cart', 'delete', { ...product });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: product._id
      });
      idbPromise('cart', 'delete', { ...product });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: product._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...product, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <div className="flex-row">
      <div>
        <img
          src={`/images/${product.images[0]}`}
          alt=""
        />
      </div>
      <div>
        <div>{product.name}, ${product.price}</div>
          <span
            role="img"
            // aria-label="trash"
            onClick={() => removeFromCart(product)}
          >
            🗑️
          </span>
        </div>
      </div>
  );
}

export default CartItem;
