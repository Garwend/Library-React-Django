import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBookFetch } from '../../../actions/bookActions';
import { borrowBook, returnBook } from '../../../actions/userActions';

import './Book.css'

const Book = ({ id, author, title, description }) => {
    const userData = useSelector(state => state.userReducer.userData)
    const dispatch = useDispatch();

    const handleBorrowClick = () => {
        dispatch(borrowBook(id));
    }

    const handleReturnClick = () => {
        dispatch(returnBook(id));
    }

    const handleDeleteClick = () => {
        dispatch(deleteBookFetch(id))
    }

    const isBookBorrowed = () => {
        for (let i = 0; i < userData.borrowed_books.length; i++) {
            if (userData.borrowed_books[i].id === id) return true
        }
        return false
    }
    return (
        <li className='book'>
            <span>{author}</span>
            <h1>{title}</h1>
            <p>{description}</p>
            {userData.is_staff ?
                <button className='delete-book-btn' onClick={handleDeleteClick}><span className="material-icons">delete</span></button> :
                null
            }
            {userData.borrowed_books !== undefined ?
                isBookBorrowed() ?
                    <button className='borrow-book-btn' onClick={handleReturnClick}><span className="material-icons">remove</span></button> :
                    <button className='borrow-book-btn' onClick={handleBorrowClick}><span className="material-icons">add</span></button> :
                null}

        </li>

    )

}

export default Book;