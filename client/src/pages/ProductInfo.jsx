import React , { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from '../utils/queries';
import { Card, Button, Row, Col } from 'react-bootstrap';

function ProductInfo() {
    const [productInfo, setProductInfo] = useState({});
    const { id } = useParams();
  
    const { loading, error, data } = useQuery(GET_PRODUCT, {
        variables: { productId: id },
    });

    if (error) {
        console.log(JSON.stringify(error))
    }


    const proID = data?.product || {};
    useEffect(() => {  
        if (!loading) {

        
        console.log(proID)
        setProductInfo({
            productId : proID._id , 
            quantity : 1,
            price : proID.price
        })}
    },[proID, loading] )

 const handleDropDown = (e) => {
     setProductInfo({
         ...productInfo,
         size : e.target.value
         
     })
 }  

  

    return (

        <Row>
            <Col lg={6}>
                {proID.images && proID.images[0] && <Card.Img variant="body" src={proID.images[0]} />}
            </Col>
            <Col lg={6}>
                <Card style={{ height: '100%' }}>
                    <Card.Body>
                        <Card.Title>{proID.name}</Card.Title>
                        <Card.Text>
                            {proID.description}
                        </Card.Text>
                        <Card.Text>
                            ${proID.price}
                        </Card.Text>
                        <Card.Text  >
                            Sizes
                            <select name="size" onChange={handleDropDown}>

                                {proID.size && proID.size.map((product, i) => (
                                    <option key={i} value={product}>{product}</option>
                                ))}

                            </select>
                        </Card.Text>
                     
                        <button className="btn  btn-primary">Add to cart</button>
                        
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    );
}

export default ProductInfo;