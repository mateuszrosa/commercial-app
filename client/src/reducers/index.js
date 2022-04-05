import {LOGIN_REQUEST} from '../actions';
import {LOGIN_SUCCESS} from '../actions';
import {LOGIN_FAILURE} from '../actions';
import {EDIT_USER_REQUEST} from '../actions';
import {EDIT_USER_SUCCESS} from '../actions';
import {EDIT_USER_FAILURE} from '../actions';
import {LOGOUT} from '../actions';
import {REGISTER_REQUEST} from '../actions';
import {REGISTER_SUCCESS} from '../actions';
import {REGISTER_FAILURE} from '../actions';
import {ADD_ORDER_REQUEST} from '../actions';
import {ADD_ORDER_SUCCESS} from '../actions';
import {ADD_ORDER_FAILURE} from '../actions';

const initialState = {
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
                error: {
                    ...action.error
                }
            }
        }
        case LOGOUT: {
            state.user = {};
            return { ...state };
        }
        case EDIT_USER_REQUEST: {
            return state;
        }
        case EDIT_USER_SUCCESS: {
           return { 
               ...state,
               user: {
                userId: action.payload.data._id,
                ...action.payload.data
                }
            }
        }
        case EDIT_USER_FAILURE: {
            return {
                ...state,
                error: {
                    ...action.error
                }
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
                    ...action.payload.data
                }
            }
        }
        case REGISTER_FAILURE: {
            return {
                ...state,
                error: action.error
            }
        }
        case ADD_ORDER_REQUEST: {
            return state;
        }
        case ADD_ORDER_SUCCESS: {
            return { 
                ...state,
                user: {
                 userId: action.payload.data._id,
                 ...action.payload.data
                 }
             }
        }
        case ADD_ORDER_FAILURE: {
            return state;
        }
            default:
        return state;
    }
}