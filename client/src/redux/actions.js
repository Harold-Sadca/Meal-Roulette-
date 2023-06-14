
export const add = (recipe) => ({
	type: 'ADD',
	payload:recipe
});

export const remove = (recipe) => ({
	type: 'REMOVE',
	payload: recipe
})

export const init = (recipe) => ({
	type:'INIT',
	payload: recipe
})

export const login = () => ({
	type: 'LOGIN'
})

export const logoutUser = () => ({
	type: 'LOGOUT'
})

export const setUser = (user) => ({
	type: 'SET_USER',
	payload: user
})

export const removeUser = () => ({
	type: 'REMOVE_USER'
})

export const setcategory = (recipe) => ({
	type: 'SET_CATEGORY',
	payload: recipe
})

export const setDrink = (drink) => ({
	type: 'SET_DRINK',
	payload: drink
})

export const setRecipe = (recipe) => ({
	type: 'CHANGE_RECIPE',
	payload: recipe
})

export const pageLoaded = () => ({
	type: 'PAGE_LOADED'
})

export const pageReloading = () => ({
	type: 'PAGE_RELOADING'
})

export const addMenu = () => ({
	type: 'ADD_INPUT'
})