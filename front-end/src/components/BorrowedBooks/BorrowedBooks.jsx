import React from "react";
import { useSelector } from "react-redux";
import Book from "../BooksList/Subcomponents/Book";

import './BorrowedBooks.css';

const BorrowedBooks = () => {
    const userData = useSelector(state => state.userReducer.userData)

    return (
        <section>
            <ul className='borrowed-books'>
                {userData.borrowed_books.map(book => <Book key={book.id} {...book} />)}
            </ul>
        </section>
    )
}

export default BorrowedBooks;