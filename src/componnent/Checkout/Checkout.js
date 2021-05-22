import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
    const { foodId } = useParams();
    const [foodInfo, setFoodInfo] = useState([])
    const foodList = foodInfo.find(data => data._id === foodId)

    useEffect(() => {
        const url = 'https://afternoon-springs-18240.herokuapp.com/events';
        fetch(url)
            .then(res => res.json())
            .then(data => setFoodInfo(data))
    }, [])

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const CheckoutBtn = (data) => {
        const checkoutList = {
            name: data.name,
            price: data.price,
            wight: data.wight,
            data: new Date()
        }

        const UserOrder = { ...loggedInUser, ...checkoutList }
        const url = 'https://afternoon-springs-18240.herokuapp.com/addOrder'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UserOrder)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }

    return (
        <Container>
            <div style={{ marginTop: '6rem' }}>
                <div>
                    <h1>Checkout</h1>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>{foodList?.name}</td>
                                <td>{foodList?.wight}</td>
                                <td>{foodList?.price}</td>
                                <td>{foodList?.date}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="d-flex justify-content-end">
                    <Button onClick={() => CheckoutBtn(foodList)} variant="success">checkout</Button>
                </div>
            </div>
        </Container>
    );
};

export default Checkout;