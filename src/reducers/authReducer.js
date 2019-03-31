import {USER_LOGIN} from '../actions/types'

const InitialState = {
    token: {}
}

export default function(state = InitialState, action){
    switch(action.type) {
        case USER_LOGIN:
            console.log("reducer")
            return {
                token: action.payload
            }
        default:
            return state;
    }
}