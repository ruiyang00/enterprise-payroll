import axios from 'axios';
import { AUTH_SIGN_UP, AUTH_ERROR } from './types';
/*


ActionCreators -> create/return Actions ({}) -> dispatched -> middlewares -> reducers
*/

export const signUp = data => {

    /*
    1) use the data and to make HTTP request to our BE and send it along
    2) take the BE response (jwtToken is here)
    3) dispatch user just signed up (with jwtToken)
    4) save the jwtToken into our localStorage
 
*/
    return async dispatch => {
        try {
            const res = await axios.post('http://localhost:5000/users/signup', data);
            console.log('res', res);


            dispatch({
                type: AUTH_SIGN_UP,
                payload: res.data.token
            });


            localStorage.setItem('JWT_TOKEN', res.data.token)
        } catch (err) {
            dispatch({
                type: AUTH_ERROR,
                payload:'Email is already in use'
            });
            console.error('err', err);
        }

    }
}