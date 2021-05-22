import React, { useEffect, useState } from 'react';
import { Button, Container, Spinner } from 'react-bootstrap';
import UserDetails from '../UserDetails/UserDetails';

const Order = () => {
    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {

        fetch('https://afternoon-springs-18240.herokuapp.com/orderItem')
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [])

    return (
        <Container>
            <div style={{ marginTop: '2.5rem' }}>

                {
                    userInfo.length === 0 && <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                    Loading...
                  </Button>
                }

                {
                    userInfo.map(data => <UserDetails details={data}></UserDetails>)
                }
            </div>
        </Container>
    );
};

export default Order;