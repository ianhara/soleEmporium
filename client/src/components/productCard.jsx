import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    // <div className="productCard" key={product._id}>
    // <img src={product.images[0]} alt={product.name} />
    // <h3>{product.name}</h3>
    // <p>{product.description}</p>
    // <p>${product.price}</p>
    // </div>
    <Link to={`/products/${product._id}`}>
    <Card >
    <Card.Img variant="top" src={product.images[0]} />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
    </Card.Body>
  </Card>
  </Link>
  )
}

export default ProductCard