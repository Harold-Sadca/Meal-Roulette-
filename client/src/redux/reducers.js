import { combineReducers } from 'redux';


const recipesR = (state=[], action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, ...action.payload];
        case 'REMOVE':
            return state.filter((el) => {
                return el._id != action.playload._id;
            })
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

const reducers = combineReducers({
    recipesR,
    authenticated
})

export default reducers;