import {
    USER_LOGIN
} from './types'

export const loginAction = creds => dispatch => {
    fetch('http://localhost:8000/login', {
            method: 'POST',
            body: `email=${creds.email}&password=${creds.password}`, // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(res => res.json())
        .then(token => dispatch({
            type: USER_LOGIN,
            payload: token
        }))
}