import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from '../utils/queries';
import { Card, Button } from 'react-bootstrap';
import {ADD_TO_CART} from '../utils/actions'
import {useStoreContext} from '../utils/storeContext'

function ProductInfo() {
    const { id } = useParams();

    const { loading, error, data } = useQuery(GET_PRODUCT, {
        variables: { productId: id },
    });
    if (error) {
        console.log(JSON.stringify(error))
    }
    console.log(data)

    const [state, dispatch] = useStoreContext()

    const proID = data?.product || {};

    const handleAddItem = () => {
        dispatch({type: ADD_TO_CART, product: proID})
    }

    return (
        <div>
            {/* ProductInfo; {id} */}
            <Card>
                {proID.images && proID.images[0] && <Card.Img variant="body" src={proID.images[0]} />}
                <Card.Body>
                    <Card.Title>{proID.name}</Card.Title>
                    <Card.Text>
                        {proID.description}
                    </Card.Text>
                    <Card.Text>
                        ${proID.price}
                    </Card.Text>
                    <Button onClick={handleAddItem} variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductInfo;