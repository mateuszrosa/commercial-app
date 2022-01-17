import {LOGIN_REQUEST} from '../actions';
import {LOGIN_SUCCESS} from '../actions';
import {LOGIN_FAILURE} from '../actions';
import {REGISTER_REQUEST} from '../actions';
import {REGISTER_SUCCESS} from '../actions';
import {REGISTER_FAILURE} from '../actions';
import {FETCH_BIKES_REQUEST} from '../actions';
import {FETCH_BIKES_SUCCESS} from '../actions';
import {FETCH_BIKES_FAILURE} from '../actions';

const initialState = {
    bikes: [],
    user: {}
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return state;
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                user: {
                    userId: action.payload.data._id,
                    ...action.payload.data
                }
            }
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                error: action.error
            }
        }
        case REGISTER_REQUEST: {
            return state;
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                user: {
                    userId: action.payload.data._id,
                    login: action.payload.data.login,
                    date: action.payload.data.date,
                }
            }
        }
        case REGISTER_FAILURE: {
            return {
                ...state,
                error: action.error
            }
        }
        case FETCH_BIKES_REQUEST: {
            return state;
        }
        case FETCH_BIKES_SUCCESS: {
            console.log(action.payload);
            return {
                ...state,
                bikes: action.payload.data
            }
        }
        case FETCH_BIKES_FAILURE: {
            return state;
        }
            default:
        return state;
    }
}