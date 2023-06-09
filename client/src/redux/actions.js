
export const add = (recipe) => ({
    type: 'ADD',
    payload:recipe
});

export const remove = (recipe) => ({
    type: 'REMOVE',
    payload: recipe
})

export const login = () => ({
    type: 'LOGIN'
})

export const logout = () => ({
    type: 'LOGOUT'
})