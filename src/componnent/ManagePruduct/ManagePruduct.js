import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import ManageItem from '../ManageItem/ManageItem';

const ManagePruduct = () => {
    const [loading, setLoading] = useState(true)
    
    const [addManage, setAddManage] = useState([])
    useEffect(()=>{
        fetch('https://afternoon-springs-18240.herokuapp.com/events')
        .then(res => res.json())
        .then(data =>{
             setAddManage(data)
             setLoading(false)
            })
    }, [])

    return (
        <div>
            {
                loading ?   <Button variant="primary" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </Button> : 
                addManage.map(edit=> <ManageItem key={edit._id} item={edit}></ManageItem>)
            }

            {/* {
                addManage.map(edit=> <ManageItem item={edit}></ManageItem>)
            } */}
        </div>
    );
};

export default ManagePruduct;