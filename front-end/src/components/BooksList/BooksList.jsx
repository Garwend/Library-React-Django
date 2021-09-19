import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { getBooks } from '../../actions/bookActions';

import './BooksList.css'

const BooksList = () => {
    const books = useSelector(state => state.bookReducer.books);
    const isBooksSet = useSelector(state => state.bookReducer.isBooksSet);

    const [isLoaded, setIsLoaded] = useState(isBooksSet);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!isBooksSet) dispatch(getBooks(setIsLoaded))
    }, [isBooksSet, dispatch])

    if (isLoaded) {
        return (
            <section>
                <ul className='books'>
                    {books.map(book => (
                        <li key={book.id} className='book'>
                            <span>{book.author}</span>
                            <h1>{book.title}</h1>
                            <p>{book.description}</p>
                        </li>
                    ))}
                </ul>

            </section>
        )
    } else {
        return <p>ładowanie...</p>
    }
}

export default BooksList;