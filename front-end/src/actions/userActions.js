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