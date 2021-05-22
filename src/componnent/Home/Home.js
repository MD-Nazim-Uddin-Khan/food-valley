import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Spinner } from 'react-bootstrap';

const Home = () => {
    const [events, setEvents] = useState([])

    useEffect(()=>{
        fetch('https://afternoon-springs-18240.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    return (
        <Container>
        <div className="row" style={{marginTop: '2.5rem', justifyContent: 'center'}}>

            {
                events.length === 0 && <Spinner  animation="border" variant="info" />
            }

            {
               events.map(event => <Shop key={event._id} event={event}></Shop>)
            }
        </div>
        </Container>
    );
};

export default Home;