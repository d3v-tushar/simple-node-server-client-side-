import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/courses'>Courses</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </nav>
        </div>
    );
};

export default Header;