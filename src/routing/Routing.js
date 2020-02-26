import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Hello from './Hello';
import Form from '../forms/Form';

export default function Routing() {
    return (
        <Router>
            <Route exact path='/' component={Home} />
            <Route path='/hello/:id' component={Hello} />
            <Route path='/form' component={Form} />
            <Link to='/form'>Weapon</Link>
            <br />
            <Link to='/'>Home</Link>
        </Router>
    );
}