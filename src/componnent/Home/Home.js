import React from 'react';
import Shop from '../Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Home = () => {

    const event =[
        {
            name: 'Hot-roll',
            gram: '5pc',
            price: '150',
            pic : 'https://images.all-free-download.com/images/graphiclarge/food_picture_01_hd_pictures_167558.jpg'
        },
        {
            name: 'Chicken',
            gram: '755 gm',
            price: '250',
            pic : 'https://images.all-free-download.com/images/graphicthumb/food_picture_03_hd_pictures_167556.jpg'
        },
        {
            name: 'Bread',
            gram: '80 gm',
            price: '40',
            pic : 'https://images.all-free-download.com/images/graphiclarge/delicious_food_01_hd_pictures_167553.jpg'
        },
        {
            name: 'Pizza',
            gram: '1pc',
            price: '450',
            pic : 'https://images.all-free-download.com/images/graphicthumb/pizza_02_hd_pictures_167413.jpg'
        },
        {
            name: 'Pidha',
            gram: '10pc',
            price: '320',
            pic : 'https://images.all-free-download.com/images/graphicthumb/delicious_food_02_hd_pictures_167552.jpg'
        },
        {
            name: 'Apple',
            gram: '1kg',
            price: '200',
            pic : 'https://images.all-free-download.com/images/graphicthumb/delicious_fruit_05_hd_picture_167512.jpg'
        },
    ]

    return (
        <Container>
        <div className="row ">
            {
               event.map(event => <Shop event={event}></Shop>)
            }
        </div>
        </Container>
    );
};

export default Home;