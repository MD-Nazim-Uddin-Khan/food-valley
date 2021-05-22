import { Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div>
        <nav className="navbar">
            <ul>
                <li style={{paddingRight:"650px",paddingLeft:"50px",fontSize:"25px"}}>    
                    FoodValley
                </li>

                {setLoggedInUser ? <li> {loggedInUser.name}</li> : <li> </li>}
                
                <li>                         
                    <Link style={{textDecoration:"none"}} to="/home"> Home</Link>
                </li>                     
                <li>
                    <Link style={{textDecoration:"none"}} to="/order">Orders</Link>
                </li>
                <li>
                    <Link style={{textDecoration:"none"}} to="/admin">Admin</Link>
                </li>
                {/* <li>
                    <Link style={{textDecoration:"none"}} to="/deals">Deals</Link>
                </li> */}
                <li>
                    <Link  style={{textDecoration:"none"}} to="/login" >
                    <Button  className="btn btn-success">Login</Button></Link>
                </li>                    
            </ul>
        </nav>
        
    </div>
    );
};

export default Header;