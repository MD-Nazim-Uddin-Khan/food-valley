import React from 'react';
import { Table } from 'react-bootstrap';

const UserDetails = (props) => {
    
    const { name, wight, price, email, data } = props.details;

    console.log(email)

    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>User Email</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Quantity Item</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{email}</td>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>1</td>
                        <td>{wight}</td>
                        <td>{data}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default UserDetails;