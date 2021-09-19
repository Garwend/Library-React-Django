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
    fetch("http://localhost:8000/users/register/", {
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
    fetch("http://localhost:8000/users/token/", {
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
                    console.log('xd')
                }
                
            },
            (error) => {
                console.log(error)
            }
        )
}
