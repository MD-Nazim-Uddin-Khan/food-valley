import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

const Shop = (props) => {
    const {imageURL, wight, name, price, _id} = props.event;
    const history = useHistory();

    const handleBtn = () => {
        history.push(`/checkout/${_id}`)
    }

    return (
        <div className="col-md-4 mt-5">

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imageURL}/>
                <Card.Body className="text-center">
                    <Card.Title>{name} - {wight}</Card.Title>                   
                    <Card> <h3 >${price}</h3> <Button onClick={handleBtn} variant="primary">Buy Now</Button>  </Card>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Shop;