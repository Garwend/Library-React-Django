import React from 'react';
import BooksList from '../../components/BooksList/BooksList';
import AddBook from '../../components/AddBook/AddBook';
import './HomePage.css'

const HomePage = () => {
    return (
        <main>
            <AddBook />
            <BooksList />
        </main>
    )
}

export default HomePage;