const PORT = 'http://localhost:3001'


function fetchRecipes () {
  return fetch(`${PORT}/recipe`)
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
  }).then(res => res.json()).then(parsedRes => parsedRes)
}

function editRecipe(recipe) {
  const method = {
    method: "PUT",
    body: JSON.stringify(recipe),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }
  return fetch(`${PORT}/recipe`, method)
}

function deleteRecipe(recipe) {
  const method = {
    method: "DELETE",
    body: JSON.stringify(recipe),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }
  return fetch(`${PORT}/recipe`, method)
}

const services = {
  fetchRecipes,
  addRecipe,
  deleteRecipe,
  editRecipe
}

export default services