import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createBook } from '../../actions/bookActions';
import './AddBook.css'

const AddBook = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");

    const handleTitleChange = e => setTitle(e.target.value);
    const handleDescriptionChange = e => setDescription(e.target.value);
    const handleAuthorChange = e => setAuthor(e.target.value);

    const clearInputs = () => {
        setTitle("");
        setDescription("");
        setAuthor("");
    }

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        if (title.length !== 0 && description.length !== 0 && author.length !== 0) {
            dispatch(createBook(author, title, description, clearInputs))
        }
    }

    return (
        <form onSubmit={handleSubmit} method="post" className='add-book-form'>
            <input type="text" name="title" id="title" placeholder="tiltle" onChange={handleTitleChange} value={title} />
            <input type="text" name="description" id="description" placeholder="description" onChange={handleDescriptionChange} value={description} />
            <input type="text" name="author" id="author" placeholder="author" onChange={handleAuthorChange} value={author} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddBook;