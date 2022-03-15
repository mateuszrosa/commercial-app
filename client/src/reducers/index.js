import {LOGIN_REQUEST} from '../actions';
import {LOGIN_SUCCESS} from '../actions';
import {LOGIN_FAILURE} from '../actions';
import {LOGOUT} from '../actions';
import {REGISTER_REQUEST} from '../actions';
import {REGISTER_SUCCESS} from '../actions';
import {REGISTER_FAILURE} from '../actions';

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
        case LOGOUT: {
            state.user = {};
            return { ...state };
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
            default:
        return state;
    }
}