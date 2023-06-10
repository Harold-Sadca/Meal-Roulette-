import { combineReducers } from 'redux';


const recipes = (state=[], action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, ...action.payload];
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
//TODO: change because you need to save the user instead of a true or false
//saving the user will make it easier to render profile
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
        case 'CHANGE':
            return action.payload;
        default:
            return null
    }
}

const reducers = combineReducers({
    recipes,
    authenticated,
    currentUser
})

export default reducers;