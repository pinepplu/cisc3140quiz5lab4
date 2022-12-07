import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='left'>
                <Link to='/'>Home</Link>
            </div>
            <div className='right'>
                <Link to='/get'>Get</Link>
                <Link to='/getall'>Get All</Link>
                <Link to='/delete'>Delete</Link>
            </div>
        </div>
    )
}

export default Navbar