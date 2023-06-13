//user profile page template
//contents: user info, user favourites, user recipes
//TODO:everything
import { pageLoaded, pageReloading, setDrink, setRecipe, setUser } from "../redux/actions"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useRoutes } from "react-router-dom";
import Loader from "./Loader";
import services from "./Services";

// function Profile({currentUser}) {
function Profile() {
  const authenticated = useSelector(state => state.authenticated)
  const currentUser = useSelector(state => state.currentUser)
  const drink = useSelector(state => state.changeDrink)
  const selected = useSelector(state => state.setRecipe)
  const loadPage = useSelector(state => state.loadPage)
  const navigate = useNavigate();
  const dispatch = useDispatch()


  function openRecipe(e, recipeType) {
    const id = e.target.id;
    if(recipeType == 'drink') {
      const userDrink = currentUser.drinkFavourites.filter((el) => el._id == id)
      dispatch(setDrink(...userDrink))
    } else if(recipeType == 'recipe') {
      const userFood = currentUser.personalRecipes.filter((el) => el._id == id)
      console.log(userFood)
      // dispatch(setRecipe(...userFood))
    }
    navigate(`/${recipeType}/${id}`)
  }
  console.log(useSelector(state => state.currentUser))

  function removeRecipe (e, recipeType, path) {
    dispatch(pageReloading())
    const _id = e.target.id;
    const filtered = currentUser[path].filter((el) => el._id != _id)
    services.removeFavourite({_id}, path).then((res) => {
      currentUser[path] = filtered
      dispatch(pageLoaded())
    })
  }


  if(!loadPage) {
    return (
      < Loader />
    )
  } else if (loadPage) {
    console.log(currentUser)
    return (
      <div className="profile-container">{authenticated ? (
          <>
          <span className="profile-label">PROFILE</span>
          <div className="user-profile">
            <div className="user-details">
              <img className="user-profile-pic" src={currentUser.profilePic} alt={currentUser.profilePic}></img> {/* dont be stupid...dont do this */}
              <div className="username">{currentUser.username}</div>
              <div className="more-info">Contact: {currentUser.email}</div>
              <div className="more-info">Reputation: 0</div>
              <div className="more-info">Recipes: {currentUser.personalRecipes.length}</div>
            </div>
            <div className="user-recipes">
              <div className="user-food-favourites">
                <span id="recipe-label">Favourite Foods:</span>
                {currentUser.foodFavourites.length ? (
                      currentUser.foodFavourites.map((el) => {
                        return <span className="fav-name-con">
                          <span className="fav-name" key={el._id} id={el._id} onClick={(e) => {openRecipe(e, 'recipe')}}>{el.name}</span>
                          <button id={el._id} className="remove-fav" onClick={(e)=> {removeRecipe(e, 'recipe', 'foodFavourites')}}>X</button>
                          </span>
                      })
                    ) : <span className="meal">You dont have any favourite recipe yet.</span>}
              </div>
              <div className="user-recipe">
                <span id="recipe-label">Personal Recipes:</span>
                  {currentUser.personalRecipes.length ? (
                      currentUser.personalRecipes.map((el) => {
                        return <span className="fav-name-con">
                          <span className="fav-name" key={el._id} id={el._id} onClick={(e) => {openRecipe(e, 'recipe')}}>{el.name}</span>
                          <button id={el._id} className="remove-fav" onClick={(e)=> {removeRecipe(e, 'recipe', 'personalRecipes')}}>X</button>
                          </span>
                      })
                    ) : <span className="meal">You have not written any recipe yet.</span>}
              </div>
              <div className="user-drink-favourites">
                <span id="recipe-label">Favourite Drinks:</span>
                  {currentUser.drinkFavourites.length ? (
                    currentUser.drinkFavourites.map((el) => {
                      return <span className="fav-name-con">
                        <span className="fav-name" key={el._id} id={el._id}  onClick={(e) => {openRecipe(e, 'drink')}}>{el.name}</span>
                        <button id={el._id} className="remove-fav" onClick={(e)=> {removeRecipe(e, 'drink', 'drinkFavourites')}}>X</button>
                        </span>
                    })
                  ) : <span className="meal">You dont have any favourite drink yet.</span>}
              </div>
            </div>
            <div className="day-meal">
              <div className="breakfast">
                <span id="plan-label">Breakfast Plans:</span>
                {currentUser.breakfast.length ? (
                  currentUser.breakfast.map((el) => {
                    return <span className="fav-name-con">
                      <span className="meal" key={el._id} id={el._id} onClick={(e) => {openRecipe(e, 'recipe')}}>{el.name}</span>
                      <button id={el._id} className="remove-fav" onClick={(e)=> {removeRecipe(e, 'recipe', 'breakfast')}}>X</button>
                      </span>
                  })
                ) : <span className="meal">You dont have a plan for breakfast yet.</span>}
              </div>
              <div className="lunch">
                <span id="plan-label">Lunch Plans:</span>
                  {currentUser.lunch.length ? (
                    currentUser.lunch.map((el) => {
                      return <span className="fav-name-con">
                      <span className="meal" key={el._id} id={el._id} onClick={(e) => {openRecipe(e, 'recipe')}}>{el.name}</span>
                      <button id={el._id} className="remove-fav" onClick={(e)=> {removeRecipe(e, 'recipe', 'lunch')}}>X</button>
                      </span>
                    })
                  ) : <span className="meal">You dont have a plan for lunch yet.</span>}
              </div>
              <div className="dinner">
                <span id="plan-label">Dinner Plans:</span>
                  {currentUser.dinner.length ? (
                    currentUser.dinner.map((el) => {
                      return <span className="fav-name-con">
                      <span className="meal" key={el._id} id={el._id} onClick={(e) => {openRecipe(e, 'recipe')}}>{el.name}</span>
                      <button id={el._id} className="remove-fav" onClick={(e)=> {removeRecipe(e, 'recipe', 'dinner')}}>X</button>
                      </span>
                    })
                  ) : <span className="meal">You dont have a plan for dinner yet.</span>}
              </div>
            </div>
          </div>
          </>
      ): (
        <>
          <span>COME ON MAN YOU CANNOT HAVE A PROFILE WITHOUT LOGGING IN</span>
        </>
  
      )
        }
      </div>
    )
  }
}

export default Profile