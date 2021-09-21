import { refreshToken } from "./userActions";

export const ADD_BOOK = 'ADD_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';
export const SET_BOOKS = 'SET_BOOKS';

export const addBook = (payload) => ({
    type: ADD_BOOK,
    payload: payload,
})

export const deleteBook = (payload) => ({
    type: DELETE_BOOK,
    payload: payload,
})


export const setBooks = (payload) => ({
    type: SET_BOOKS,
    payload: payload,
})


export const createBook = (author, title, description, clearInputs) => (dispatch) => {
    const data = JSON.stringify({
        "title": title,
        "description": description,
        "author": author,
    })
    fetch("http://localhost:8000/books/create/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
        },
        body: data
    })
        .then(res => {
            if (res.ok) return res.json()
            else throw new Error(res.statusText)
        })
        .then(
            (result) => {
                dispatch(addBook(result))
                clearInputs();
            },
            (error) => {
                if (error.message === 'Unauthorized') {
                    dispatch(refreshToken(getBooks, author, title, description, clearInputs));
                }
                else {
                    console.error(error)
                }
            }
        )
}

export const getBooks = (setIsLoaded) => (dispatch) => {
    fetch("http://localhost:8000/books/list/", {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
        },
    })
    .then(res => {
        if (res.ok) return res.json()
        else throw new Error(res.statusText)
    })
    .then(
        (result) => {
            setIsLoaded(true)
            dispatch(setBooks(result))
        },
        (error) => {
            if (error.message === 'Unauthorized') {
                dispatch(refreshToken(getBooks, setIsLoaded));
            }
            else {
                console.error(error)
                setIsLoaded(true)
            }
           
        }
    )
}

export const deleteBookFetch = (id) => (dispatch) => {
    fetch(`http://localhost:8000/books/detail/${id}/`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
        },
    })
        .then(res => {
            if (res.ok) return res
            else throw new Error(res.statusText)
        })
        .then(
            (result) => {
                dispatch(deleteBook(id));
            },
            (error) => {
                if (error.message === 'Unauthorized') {
                    dispatch(refreshToken(deleteBookFetch, id));
                }
                else console.error(error)
            }
        )
}