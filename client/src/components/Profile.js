//user profile page template
//contents: user info, user favourites, user recipes
//TODO:everything
import { setDrink} from "../redux/actions"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import services from "./Services";
import ProfileSection from "./ProfileSection";
import '../css/profile.css'

function Profile() {
  const authenticated = useSelector(state => state.authenticated)
  const currentUser = useSelector(state => state.currentUser)
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
    }
    navigate(`/${recipeType}/${id}`)
  }
  console.log(useSelector(state => state.currentUser))

  function removeRecipe (e, recipeType, path) {
    const _id = e.target.id;
    const filtered = currentUser[path].filter((el) => el._id != _id)
    services.removeFavourite({_id}, path).then((res) => {
      currentUser[path] = filtered
      navigate(`/user-profile`)
    })
  }
  if(!loadPage) {
    return (
      < Loader />
    )
  } else if (loadPage) {
    return (
      <div key={'profile'} className="profile-container">{authenticated ? (
          <>
          <span key={currentUser.username} className="profile-label">PROFILE</span>
          <div key={currentUser.username} className="user-profile">
            <div className="user-details">
              <img className="user-profile-pic" src={currentUser.profilePic} alt={currentUser.profilePic}></img> {/* dont be stupid...dont do this */}
              <div className="username">{currentUser.username}</div>
              <div className="more-info">Contact: {currentUser.email}</div>
              <div className="more-info">Reputation: 0</div>
              <div className="more-info">Recipes: {currentUser.personalRecipes.length}</div>
            </div>
            <div className="user-recipes">
            <div className="day-plan">
                <ProfileSection removeRecipe={removeRecipe} openRecipe={openRecipe} typemessage={'breakfast'} type={'breakfast'} recipe={'recipe'} />
                <ProfileSection removeRecipe={removeRecipe} openRecipe={openRecipe} typemessage={'lunch'} type={'lunch'} recipe={'recipe'} />
                <ProfileSection removeRecipe={removeRecipe} openRecipe={openRecipe} typemessage={'dinner'} type={'dinner'} recipe={'recipe'} />
              </div>
              <div className="fave">
                <ProfileSection removeRecipe={removeRecipe} openRecipe={openRecipe} typemessage={'favourite'} type={'foodFavourites'} recipe={'recipe'} />
                <ProfileSection removeRecipe={removeRecipe} openRecipe={openRecipe} typemessage={'personal'} type={'personalRecipes'} recipe={'recipe'} />
                <ProfileSection removeRecipe={removeRecipe} openRecipe={openRecipe} typemessage={'drink'} type={'drinkFavourites'} recipe={'drink'} />
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