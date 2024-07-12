import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';
const Home = () => {
  const { loading, error, data } = useQuery(QUERY_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (<div> <h2> Products</h2> <div className="product-list">

    {data.products.map((product) => (<div key={product._id} className="product">
      <img src={product.image[0]} alt={product.name} />
      <div className="product-details"> <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p> Price: ${product.price} </p> <p>Stock: {product.stock}</p> </div>
    </div>))} </div> </div>);
};

export default Home;