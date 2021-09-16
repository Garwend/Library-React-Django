import React, { useState, useEffect } from 'react'
import './BooksList.css'

const BooksList = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/books/list/")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setBooks(result)
                },
                (error) => {
                    setIsLoaded(true);
                }
            )
    }, [])

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