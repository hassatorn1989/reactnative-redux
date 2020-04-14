import { GET_LOGIN } from '../actions/types';

const initialState = {
    data : ''
}

export default function (state = initialState, action) {
    const { type } = action;
    switch (type) {
        case GET_LOGIN: {
            return {
                ...state,
                data : action.payload,
            }
        }
        default:
            return state
    }
}
