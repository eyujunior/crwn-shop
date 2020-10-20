import React from 'react';
import { Link } from 'react-router-dom';
import './Header.style.scss';
import { ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
             <Logo className='logo' />
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
        </div>
    </div>
)

export default Header;