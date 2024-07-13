import React from 'react'
import { useParams } from 'react-router-dom'

function ProductInfo() {
    const { productId } = useParams();

  return (
    <div>ProductInfo; {productId}</div>
  )
}

export default ProductInfo