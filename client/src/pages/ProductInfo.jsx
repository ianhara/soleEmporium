import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from '../utils/queries';
import { Card , Button } from 'react-bootstrap';

function ProductInfo() {
    const { id } = useParams();

    const { loading, error, data } = useQuery(GET_PRODUCT, {
        variables: { productId: id },
    }); 
    if (error)  {
        console.log(JSON.stringify(error))
    }
    console.log(data)

    const proID = data?.product || {};
  
    
  return (
    <div class="d-flex justify-content-center">
      {/* ProductInfo; {id} */}
    <Card style={{ width: '18rem' }}>
                {proID.images && proID.images[0] && <Card.Img variant="body" src={proID.images[0]} />}
                <Card.Body>
                    <Card.Title>{proID.name}</Card.Title>
                    <Card.Text>
                        {proID.description}
                    </Card.Text>
                    <Card.Text>
                        ${proID.price}
                    </Card.Text>
                    <Card.Text button variant="primary" >
                        Sizes {proID.size}
                    </Card.Text>
                    <Card.Text>
                        {proID.stock}
                    </Card.Text>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductInfo;