import React from 'react'
import './Header.scss';
import { MdOutlineNightlight } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Link to='/'>Where in the world?</Link>
            <div className='mode'>
                <MdOutlineNightlight />
                <span>Dark Mode</span>
            </div>
        </div>
    )
}

export default Header