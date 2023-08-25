const PORT = 'http://localhost:3001'


async function fetchRecipes () {
  return fetch(`${PORT}/recipe`,{
    method: "GET",
    credentials: "include"
  })
          .then(res => res.json())
          .then(parsedRes => parsedRes)
}

async function fetchRecipeByCat (cat) {
  return fetch(`${PORT}/get-recipes/${cat}`,{
    method: "GET",
    credentials: "include"
  })
          .then(res => res.json())
          .then(parsedRes => parsedRes)
}

async function addRecipe(recipe) {
  return fetch(`${PORT}/create-recipe`, {
    method: "POST",
    body: JSON.stringify(recipe),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    credentials: "include"
  }).then(res => res.json()).then(parsedRes => parsedRes)
}

async function editRecipe(recipe) {
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

async function deleteRecipe(recipe) {
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

async function registerUser (user) {
  return fetch(`${PORT}/register`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    credentials: "include"
  }).then(res => res.json()).then(parsedRes => parsedRes)
}

async function loginUser (user) {
  return fetch(`${PORT}/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    credentials: "include"
  }).then(res => res.json()).then(parsedRes => parsedRes)
}

async function logoutUser () {
  return fetch(`${PORT}/logout`, {
    method: "GET",
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    credentials: "include"
  }).then(res => res.json()).then(parsedRes => parsedRes)
}

async function getComments (id) {
  return fetch(`${PORT}/${id}/comments`, {
    method: "GET",
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    credentials: "include"
  }).then(res => res.json()).then(parsedRes => parsedRes)
}

async function postComment (comment) {
  return fetch(`${PORT}/post-comment`, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    credentials: "include"
  }).then(res => res.json()).then(parsedRes => parsedRes)
}

async function getUser() {
  return fetch(`${PORT}/user`, {
    method: "GET",
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    credentials: "include"
  }).then(res => res.json()).then(parsedRes => parsedRes)
}

async function fetchDrink() {
  return fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(res => res.json()).then(parsedRes => parsedRes)
}

async function saveDrink(drink) {
  return fetch(`${PORT}/drink`, {
    method: "POST",
    body: JSON.stringify(drink),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    credentials: "include"
  }).then(res => res.json()).then(parsedRes => parsedRes)
}

async function saveFoodRecipe (id, path) {
  return fetch(`${PORT}/add-meal/${path}`, {
    method: "POST",
    body: JSON.stringify(id),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    credentials: "include"
  }).then(res => res.json()).then(parsedRes => parsedRes)
}

async function removeFavourite(id, path) {
  return fetch(`${PORT}/remove-favourite/${path}`, {
    method: "POST",
    body: JSON.stringify(id),
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
  logoutUser,
  getComments,
  postComment,
  getUser,
  fetchRecipeByCat,
  fetchDrink,
  saveDrink,
  saveFoodRecipe,
  removeFavourite
}

export default services