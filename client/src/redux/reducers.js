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
const defaultUser = {
	username: 'Guest',
	profilePic: 'https://m.media-amazon.com/images/I/515EOVqRexL._AC_UF894,1000_QL80_.jpg',
	foodFavourites:[],
	personalRecipes:[],
	drinkFavourites:[],
	breakfast:[],
	lunch:[],
	dinner: []

}
const currentUser = (state=defaultUser, action) => {
	switch (action.type) {
		case 'SET_USER':
			return action.payload;
		case 'REMOVE_USER':
			return defaultUser;
		default:
			return state;
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

const filteredByCat = (state=[], action) => {
	switch (action.type) {
		case 'SET_CATEGORY':
			return [...action.payload];
		default:
			return state
	}
}

const defaultDrink = {name: 'Water', ingredients: []}
const changeDrink = (state=defaultDrink, action) => {
	switch (action.type) {
		case 'SET_DRINK':
			return action.payload
		default:
			return state
	}
}

const selectedRecipe = (state, action) => {
	switch (action.type) {
		case 'CHANGE_RECIPE':
			return action.payload
		default:
			return null
	}
}

const loadPage = (state=false, action) => {
	switch (action.type) {
		case 'PAGE_LOADED':
			return true
		case 'PAGE_RELOADING':
			return false
		default:
			return state
	}
}

const menuNums = (state=0, action) => {
	switch (action.type) {
		case 'ADD_INPUT':
			return state++
		default:
			return state
	}
}

const reducers = combineReducers({
    recipes,
    authenticated,
    currentUser,
    latest,
    filteredByCat,
		changeDrink,
		selectedRecipe,
		loadPage,
		menuNums
})

export default reducers;