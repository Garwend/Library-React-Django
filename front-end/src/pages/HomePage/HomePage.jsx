import React from 'react';
import { useSelector } from 'react-redux';
import BooksList from '../../components/BooksList/BooksList';
import SearchBook from '../../components/SerachBook/SearchBook';
import AddBook from '../../components/AddBook/AddBook';

import './HomePage.css'


const HomePage = () => {
    const userData = useSelector(state => state.userReducer.userData)
    return (
        <main>
            {userData.is_staff ? <AddBook /> : null}
            <SearchBook />
            <BooksList />
        </main>
    )
}

export default HomePage;