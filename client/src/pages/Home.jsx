import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS } from '../utils/queries';
import ProductCard from '../components/productCard';
import wallpaper from "../assets/wallpaper.jpg"
import "../index.css"


const Home = () => {

  const { loading, data } = useQuery(GET_ALL_PRODUCTS, {
    fetchPolicy: "no-cache"
  });
  
  const productList = data?.products || []; 
  // console.log(productList);
    return (
      <div className="homePage">
        <div className="row">
          <img className="wallpaper" src={wallpaper}></img>   
      
     
       {productList.map((product) => (
          <div className="col-md-3" key={product._id}>
          <ProductCard product={product} />
          </div>
        ))}
        </div>
      </div>
    );
  };
  
  
  export default Home;