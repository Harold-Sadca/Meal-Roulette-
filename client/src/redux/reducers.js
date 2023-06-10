import { combineReducers } from 'redux';


const recipes = (state=[], action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload];
        case 'REMOVE':
            return state.filter((el) => {
                return el._id != action.playload._id;
            })
        case 'INIT':
            return action.payload
        default:
            return state;
    }
}

const authenticated = (state=false, action) => {
    switch (action.type) {
        case 'LOGIN':
            return true;
        case 'LOGOUT':
            return false;
        default:
            return state;
    }
}

const currentUser = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.payload;
        case 'REMOVE_USER':
            return null;
        default:
            return null;
    }
}

const latest = (state, action) => {
    switch (action.type) {
        case 'SET_LATEST':
            return action.payload;
        default:
            return null
    }
}

const filteredByCat = (state, action) => {
    switch (action.type) {
        case 'SET_CATEGORY':
            return [...action.payload];
        default:
            return null
    }
}

const reducers = combineReducers({
    recipes,
    authenticated,
    currentUser,
    latest,
    filteredByCat
})

export default reducers;