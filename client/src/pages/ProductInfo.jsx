import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from '../utils/queries';

function ProductInfo() {
    const { id } = useParams();

    const { loading, error, data } = useQuery(GET_PRODUCT, {
        variables: { productId: id }
    }); 
    if (error)  {
        console.log(JSON.stringify(error))
    }
    console.log(data)

  return (
    <div>ProductInfo; {id}</div>
  )
}

export default ProductInfo