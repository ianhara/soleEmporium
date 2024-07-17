import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div>
    <Card className="product-card mb-4">
            <Card.Img variant="top" src={product.images[0]} className="productCardImage"/>
        <Card.Body>
            <Card.Title>
                <Link to={`/products/${product._id}`} className="productLink">
                    {product.name}
                </Link>
            </Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text className="product-price">Price: ${product.price}</Card.Text>
        </Card.Body>
    </Card>
    </div>
  )
}

export default ProductCard;