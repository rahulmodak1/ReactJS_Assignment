import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({totalItems}) => {
    return (
        <header className='header'>
            <div>
                <h1>
                    <Link to='/' className='logo'>RMart</Link>
                </h1>
            </div>
            <div className='header_links'>
                <ul>
                    <li>
                        <Link to="/">Home </Link>
                    </li>
                    <li>
                        <Link to="/signup">SignUp</Link>
                    </li>
                    <li>
                        <Link to="/cart" className='cart'><i className="fa-solid fa-cart-shopping"></i></Link> 
                       
                    </li> 
                    <span className='cart-item-quantity'>{totalItems}</span>
                </ul>

            </div>
        </header>
    )
}

export default Header