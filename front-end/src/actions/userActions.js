export const SET_USER = 'SET_USER';

export const setUser = (payload) => ({
    type: SET_USER,
    payload: payload,
})

export const registerUser = (username, email, password) => (dispatch) => {
    const data = JSON.stringify({
        "username": username,
        "email": email,
        "password": password,
    })
    fetch('http://localhost:8000/users/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data
    })
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
            },
            (error) => {
                console.log(error)
            }
        )
}

export const loginUser = (username, password) => (dispatch) => {
    const data = JSON.stringify({
        "username": username,
        "password": password,
    })
    fetch('http://localhost:8000/users/token/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data
    })
        .then(res => res.json())
        .then(
            (result) => {
                if ('access' in result && 'refresh' in result) {
                    window.localStorage.setItem('token', result['access'])
                    window.localStorage.setItem('refreshToken', result['refresh'])
                    dispatch(setUser({"username": username}))
                }
                else{
                    console.error('error')
                }
                
            },
            (error) => {
                console.log(error)
            }
        )
}

export const getUser = () => (dispatch) => {
    fetch('http://localhost:8000/users/details/', {
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
                dispatch(setUser(result))
            },
            (error) => {
                if (error.message === 'Unauthorized') {
                    dispatch(refreshToken(getUser));
                }
                else console.error(error)
            }
        )
}

export const refreshToken = (func) => (dispatch) => {
    const data = JSON.stringify({
        "refresh": window.localStorage.getItem('refreshToken'),
    })
    fetch('http://localhost:8000/users/token/refresh/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data
    })
        .then(res => {
            if (res.ok) return res.json()
            else throw new Error(res.statusText)
        })
        .then(
            (result) => {
                window.localStorage.setItem('token', result['access']);
                window.localStorage.setItem('refreshToken', result['refresh']);
                dispatch(func());
            },
            (error) => {
                if (error.message === 'Unauthorized') {
                    window.localStorage.removeItem('token');
                    window.localStorage.removeItem('refreshToken');
                    dispatch(setUser({}));
                }
                else console.error(error)
            }
        )

}