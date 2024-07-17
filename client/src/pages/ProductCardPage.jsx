import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS } from '../utils/queries';
import ProductCard from '../components/ProductCard';

const ProductCardPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

  if(loading) return <div>Loading...</div>;
  if(error) return <div>Error: {error.message}</div>;

  return (
    <div className="productCardPage">
      <div className="container">
        <div className="row">
            {data.products.map((product) => (
              <div className="col-md-4" key={product._id}>
                <ProductCard product={product}/>
              </div>
            ))}
        </div>
      </div>  
    </div>
  )
};

export default ProductCardPage;