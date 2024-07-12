import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

const Home = () => {
  return  (
    <div className="container mt-5">
      <ProductList />
      <Cart />
    </div>
  )
}
