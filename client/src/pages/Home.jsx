import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(GET_ALL_PRODUCTS, {
    fetchPolicy: "no-cache"
  });
  const productList = data?.products || []; 
  console.log(productList);
    return (
      <div className="homePage">
       {productList.map((product) => (
          <div className="productCard" key={product._id}>
            <img src={product.images[0]} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
        
      </div>
    );
  };
  
  
  export default Home;