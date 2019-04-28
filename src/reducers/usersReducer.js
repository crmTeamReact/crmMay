import {USER_LOGIN, USER_SIGNOUT} from '../actions/types'

// const InitialState = {
//     token: {}
// }

export default function(state = {}, action){
    switch(action.type) {
        case USER_LOGIN:
            return {
                loginData: action.payload
            }
        case USER_SIGNOUT:
            return {loginData: undefined}
        default:
            return state;
    }
}