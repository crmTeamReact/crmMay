import {USER_LOGIN} from '../actions/types'

// const InitialState = {
//     token: {}
// }

export default function(state = {}, action){
    switch(action.type) {
        case USER_LOGIN:
            return {
                token: action.payload
            }
        default:
            return state;
    }
}