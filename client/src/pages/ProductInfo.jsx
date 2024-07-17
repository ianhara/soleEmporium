import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from '../utils/queries';
import { Card, Button, Row, Col, Carousel, Modal } from 'react-bootstrap';
import { ADD_TO_CART } from '../utils/actions';
import { useStoreContext } from '../utils/GlobalState';

function ProductInfo() {
    const [productInfo, setProductInfo] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    const { loading, error, data } = useQuery(GET_PRODUCT, {
        variables: { productId: id },
    });

    if (error) {
        console.log(JSON.stringify(error))
    }

    const [state, dispatch] = useStoreContext()

    const proID = data?.product || {};
    useEffect(() => {
        if (!loading) {
            setProductInfo(proID.size[0])
        }
    }, [proID, loading])

    const handleDropDown = (e) => {
        setProductInfo(e.target.value*1)
    }

    const handleAddItem = () => {
        dispatch({type: ADD_TO_CART, product: {...proID, quantity: 1, size: productInfo} });
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    const handleGoToCart = () => {
        setShowModal(false);
        navigate('/cart');
    }

    return (
        <>
        <Row>
            <Col lg={6}>
                {proID.images && (
                    <Carousel>
                        {proID.images.map((image, index) => (
                            <Carousel.Item key={index}>
                                <Card.Img variant="top" src={image}/>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                )}
            </Col>
            <Col lg={6}>
                <Card style={{ height: '100%' }}>
                    <Card.Body>
                        <Card.Title>{proID.name}</Card.Title>
                        <Card.Text>{proID.description}</Card.Text>
                        <Card.Text>${proID.price}</Card.Text>
                        <Card.Text  >
                            Size
                            <select name="size" onChange={handleDropDown} value={productInfo.size}>
                                {proID.size && proID.size.map((size, i) => (
                                    <option key={i} value={size}>{size}</option>
                                ))}
                            </select>
                        </Card.Text>
                        <Button variant="secondary" onClick={() => handleAddItem()}>Add to cart</Button>
                    </Card.Body>
                </Card>
            </Col >
        </Row >
        
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Added to Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{proID.name} has been added to your cart.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Continue Shopping
                </Button>
                <Button variant="primary" onClick={handleGoToCart}>
                    Go to Cart
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default ProductInfo;