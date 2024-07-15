import React from 'react'
import { Card } from 'react-bootstrap'

function ProductInfo({ product }) {

  return (
    <div>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>{product.description}</Card.Text>
      <Card.Img variant = "top" src={`/products/${product.images[0]._id}`}/>
      <Card.Text>${product.price}</Card.Text> 
      <Card.Text>{product.quantity}</Card.Text>
      <Card.Text>{product.category}</Card.Text>
      <Card.Text>{product.brand}</Card.Text>
      
    </div>
  )
}

export default ProductInfo