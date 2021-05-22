import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ImageUpload from '../ImageUpload/ImageUpload';
import ManagePruduct from '../ManagePruduct/ManagePruduct';

const Admin = () => {
    return (
        <Container>
            <Router>
                <div className="row" style={{marginTop: '2.5rem'}}>
                    <div className= "col-md-3" style={{backgroundColor: 'rgb(2, 56, 56)'}}>
                        <Link style={{textDecoration: 'none', color: 'white'}} to="/manage">Manage Product</Link> <br/>
                        <Link style={{textDecoration: 'none', color: 'white'}} to="/admin">Add Product</Link>
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route path="/manage">
                                <ManagePruduct/>
                            </Route>
                            <Route path="/upload">
                                <ImageUpload/>
                            </Route>
                            <Route exact to="/admin">
                                <ImageUpload />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </Container>
    );
};

export default Admin;