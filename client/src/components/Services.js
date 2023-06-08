const PORT = 'http://localhost:3001'


function fetchRecipes () {
  return fetch(`${PORT}/recipe`,{
    method: "GET",
    credentials: "include"
  })
          .then(res => res.json())
          .then(parsedRes => parsedRes)
}

function addRecipe(recipe) {
  return fetch(`${PORT}/create-recipe`, {
    method: "POST",
    body: JSON.stringify(recipe),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    credentials: "include"
  }).then(res => res.json()).then(parsedRes => parsedRes)
}

function editRecipe(recipe) {
  const method = {
    method: "PUT",
    body: JSON.stringify(recipe),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    credentials: "include"
  }
  return fetch(`${PORT}/recipe`, method)
}

function deleteRecipe(recipe) {
  const method = {
    method: "DELETE",
    body: JSON.stringify(recipe),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    credentials: "include"
  }
  return fetch(`${PORT}/recipe`, method)
}

function registerUser (user) {
  return fetch(`${PORT}/register`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    credentials: "include"
  }).then(res => res.json()).then(parsedRes => parsedRes)
}

function loginUser (user) {
  return fetch(`${PORT}/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    credentials: "include"
  }).then(res => res.json()).then(parsedRes => parsedRes)
}

function logoutUser () {
  return fetch(`${PORT}/logout`, {
    method: "GET",
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    credentials: "include"
  }).then(res => res.json()).then(parsedRes => parsedRes)
}

const services = {
  fetchRecipes,
  addRecipe,
  deleteRecipe,
  editRecipe,
  registerUser,
  loginUser,
  logoutUser
}

export default services