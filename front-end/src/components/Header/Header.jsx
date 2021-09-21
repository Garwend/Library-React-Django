import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/userActions";

import './Header.css'

const Header = () => {
    const userData = useSelector(state => state.userReducer.userData)
    const dispatch = useDispatch();

    const handleClick = () => dispatch(logoutUser())

    if (window.localStorage.getItem('token') !== null) {
        return (
            <header>
                <nav>
                    <Link to='/'><span style={{ marginRight: '10px' }} className='material-icons'>home</span></Link>
                    <Link to='/profile'>{userData.username}</Link>
                    <button onClick={handleClick} className='logout-btn'>
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