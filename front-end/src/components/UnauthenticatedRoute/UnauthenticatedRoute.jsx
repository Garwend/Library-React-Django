import React from 'react';
import { useSelector } from "react-redux";
import { Route, Redirect } from 'react-router-dom';

const UnauthenticatedRoute = ({ component: Component, ...rest }) => {
    const userData = useSelector(state => state.userReducer.userData)
    const isLoggedIn = (userData !== {} && window.localStorage.getItem('token') !== null)

    return <Route {...rest} render={() => {
        return isLoggedIn ? <Redirect to='/' /> : <Component />
    }} />

}

export default UnauthenticatedRoute