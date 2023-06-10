
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

export const logout = () => ({
    type: 'LOGOUT'
})

export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user
})

export const removeUser = () => ({
    type: 'REMOVE_USER'
})