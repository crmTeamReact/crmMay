import {USER_LOGIN, USER_SIGNOUT} from './types'

export const userLoggedIn = json => ({
    type: USER_LOGIN,
    payload: json
})

export const userSignOut = () => ({
    type: USER_SIGNOUT
})


export const loginAction = function(creds){
    return function(dispatch){
        return fetch('http://localhost:8080/api/login', {
            method: 'POST',
            body: `email=${creds.email}&password=${creds.password}`, // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(res => res.json())
        .then(json => {
            localStorage.token = json.token;
            return dispatch(userLoggedIn(json))
        })
        
    }
}

export const logOutAction = function(){
    return function (dispatch){
        localStorage.removeItem("token");
        return dispatch(userSignOut())
    }
}
    


// import {USER_GETALL} from './types'

// export const gottenAll = json => ({
//     type: USER_GETALL,
//     payload: json
// })

// export const users_getAll = function(){
//     return function(dispatch){
//         return fetch('http://localhost:8000/users/all', {
//             headers: {
//                 'Authorization': `Bearer ${localStorage.token}`
//             }
//         })
//             .then(res => res.json())
//             .then(json => dispatch(gottenAll(json)))
        
//     }
// }
