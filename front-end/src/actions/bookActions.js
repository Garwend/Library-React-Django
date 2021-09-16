export const ADD_BOOK = 'ADD_BOOK';
export const SET_BOOKS = 'SET_BOOKS';

export const addBook = (payload) => ({
    type: ADD_BOOK,
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
    fetch("http://localhost:8000/books/list/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data
    })
        .then(res => res.json())
        .then(
            (result) => {
                dispatch(addBook(result))
                clearInputs();
            },
            (error) => {
                console.log(error)
            }
        )
}

export const getBooks = (setIsLoaded) => (dispatch) => {
    fetch("http://localhost:8000/books/list/")
    .then(res => res.json())
    .then(
        (result) => {
            setIsLoaded(true)
            dispatch(setBooks(result))
        },
        (error) => {
            setIsLoaded(true)
        }
    )
}