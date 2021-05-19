import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';

const Shop = ({event}) => {
    return (
        <div className="col-md-4 mt-5">

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={event.pic}/>
                <Card.Body className="text-center">
                    <Card.Title>{event.name} - {event.gram}</Card.Title>
                    
                    <Card> <h3 >${event.price}</h3> <Button variant="primary">Buy Now</Button> </Card>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Shop;