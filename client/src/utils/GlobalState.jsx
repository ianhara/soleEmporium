import { createContext, useContext, useReducer } from "react";
import { reducer } from './reducers'

const StoreContext = createContext();
const { Provider } = StoreContext;

const getInitialState = () => {
  let obj = JSON.parse(window.localStorage.getItem('cart')) || {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  }

  return obj
}

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, getInitialState());

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
