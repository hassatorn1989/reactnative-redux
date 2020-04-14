
import { GET_LOGIN } from './types';

export function GetLogin(data) {
    console.log('GetLogin');
    
    return {
        type: GET_LOGIN,
        payload: data
    }
}
