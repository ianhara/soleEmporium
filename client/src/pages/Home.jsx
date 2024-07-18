// import { useQuery } from '@apollo/client';
// import { GET_ALL_PRODUCTS } from '../utils/queries';
// import ProductCard from '../components/productCard';
import wallpaper from "../assets/wallpaper.jpg"
import "../index.css"


const Home = () => {
    return (
      <div className="homePage">
        <div className="row">
          <img className="wallpaper" src={wallpaper}></img>   
        </div>
      </div>
    );
  };
  
  
  export default Home;