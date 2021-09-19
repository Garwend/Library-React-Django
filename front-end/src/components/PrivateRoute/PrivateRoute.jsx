import React from 'react';
import { useSelector } from "react-redux";
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const userData = useSelector(state => state.userReducer.userData)

    const isLoggedIn = (userData !== {} && window.localStorage.getItem('token') !== null)

    return <Route {...rest} render={() => {
        return isLoggedIn ? <Component /> : <Redirect to='/login' />
    }} />

}

export default PrivateRoute