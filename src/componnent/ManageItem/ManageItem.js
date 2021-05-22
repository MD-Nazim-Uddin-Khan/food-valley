import React from 'react';
import { Button } from 'react-bootstrap';

const ManageItem = (props) => {
    const { name, wight, price, _id } = props.item;

    const deleteBtn = id =>{
        fetch(`https://afternoon-springs-18240.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('delete successfully')
        })
    }

    return (
        <div>

            <p>{name} --- {wight} ${price} <Button variant="primary">Buy Now</Button> 
             <Button onClick={() =>deleteBtn(`${_id}`)} variant="danger">Delete</Button> </p>
        </div>
    );
};

export default ManageItem;