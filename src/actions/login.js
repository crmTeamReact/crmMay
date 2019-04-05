import {
    USER_LOGIN
} from './types'

export const userLoggedIn = creds => ({
    type: USER_LOGIN,
    payload: creds
})



export const loginAction = function(creds){
    return function(dispatch){
        dispatch(userLoggedIn(creds))
        return fetch('http://localhost:8000/login', {
            method: 'POST',
            body: `email=${creds.email}&password=${creds.password}`, // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        // .then(res => res.json())
        
    }
}
    
