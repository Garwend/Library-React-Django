import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterBooks, getBooks } from "../../actions/bookActions";
import './SearchBook.css'

const SearchBook = () => {
    const dispatch = useDispatch();

    const handleChange = e => {
        dispatch(filterBooks(e.target.value))
    }

    useEffect(() => {
        return () => {
            dispatch(getBooks(() => { }))
        }
    }, [dispatch])

    return (
        <section className='search-book-wrap'>
            <input type="search" name="search-book" id="search-book" className='search-book' placeholder="Search" onChange={handleChange} />
        </section>
    )
}

export default SearchBook;