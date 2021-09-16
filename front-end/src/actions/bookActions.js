export const SET_BOOKS = 'SET_BOOKS';

export const setBooks = (payload) => ({
    type: SET_BOOKS,
    payload: payload,
})


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