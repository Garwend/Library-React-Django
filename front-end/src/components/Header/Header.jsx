import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import './Header.css'

const Header = () => {
    const userData = useSelector(state => state.userReducer.userData)

    if (window.localStorage.getItem('token') !== null) {
        return (
            <header>
                <nav>
                    <p>{userData.username}</p>
                    <button className='logout-btn'>
                        logout
                    </button>
                </nav>
            </header>
        )
    } else {
        return null
    }


}

export default Header;