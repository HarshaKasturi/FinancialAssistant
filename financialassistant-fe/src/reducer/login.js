

import { createReducer, createNamespacer } from '../commons/js/utils/reducer';
import { fromPairs as _fromPairs } from 'lodash';


const initialState = {
    username: {
        value: '',
        error: '',
        showError: '',
    },
    password: {
        value: '',
        error: '',
        showError: '',
    },
    isLoggedIn:  false,
    role: '',
    error: '',
}

// const namespacer = createNamespacer("LOGIN")

const reducer = createReducer(initialState, {
    "SET_USERNAME": (state, action) => {
        return {
            ...state,
            username: {
                ...state.username,
                value: action.payload.value
            },
        }
    },
    "SET_PASSWORD": (state, action) => {
        return {
            ...state,
            password: {
                ...state.password,
                value: action.payload.value
            },
        }
    },
    // [namespacer("CLEAR_LOGIN_FORM")]: (state, action) => {
    //     return {
    //         ...initialState
    //     }
    // },
    "SET_ERROR": (state, action) => {
        return {
            ...state,
            error: action.payload.value,
        }
    },

    "SET_LOGGED_IN": (state, action) => {
        let isLoggedIn = action.payload.value;
        let role = isLoggedIn ? action.payload.role : '';

        return {
            ...state,
            isLoggedIn,
            role,
        }
    },
    // [namespacer("SET_FIELD_ERRORS")]: (state, action) => {
    //     let errors = action.payload.value;

    //     const loadedFields = _fromPairs(Object.entries(errors).map((error) => {
    //         const [key, value] = error;
    //         return [key, {
    //             ...state[key],
    //             error: value
    //         }]
    //     }))

    //     return {
    //         ...state,
    //         ...loadedFields,
    //     }
    // },
})

export default reducer;