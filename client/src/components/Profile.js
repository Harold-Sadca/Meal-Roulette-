//user profile page template
//contents: user info, user favourites, user recipes
//TODO:everything
import { setDrink } from "../redux/actions"
import { useDispatch, useSelector } from "react-redux";

function Profile() {
  const authenticated = useSelector(state => state.authenticated)
  const currentUser = useSelector(state => state.currentUser)
  const drink = useSelector(state => state.changeDrink)

  // <Route path='/drink' element={<Drink drink={drink} />} />
  // <Route path='/recipe/:id' element={<ShowSelected />} />

  function openRecipe(e, whereTo,recipeType) {
    const id = e.target.id;
    console.log(id, whereTo, recipeType)

  }

  return (
    <div className="profile-container">{currentUser ? (
        <>
        <span className="profile-label">PROFILE</span>
        <div className="user-profile">
          <div className="user-details">
            <img className="user-profile-pic" src={currentUser.profilePic} alt={currentUser.profilePic}></img>
            <div className="username">{currentUser.username}</div>
          </div>
          <div className="user-recipes">
            <div className="user-food-favourites">
              <span>Favourite Foods:</span>
              {currentUser.foodFavourites.length ? (
                    currentUser.foodFavourites.map((el) => {
                      return <span className="fav-name" key={el._id} id={el._id} >{el.name}</span>
                    })
                  ) : <span>You dont have any favourite recipe yet.</span>}
            </div>
            <div className="user-recipe">
              <span>Personal Recipes:</span>
                {currentUser.personalRecipes.length ? (
                    currentUser.personalRecipes.map((el) => {
                      return <span className="fav-name" key={el._id} id={el._id} >{el.name}</span>
                    })
                  ) : <span>You have not written any recipe yet.</span>}
            </div>
            <div className="user-drink-favourites">
              <span>Favourite Drinks:</span>
                {currentUser.drinkFavourites.length ? (
                  currentUser.drinkFavourites.map((el) => {
                    return <span className="fav-name" key={el._id} id={el._id}  onClick={(e) => {openRecipe(e, '/drink', 'drink')}}>{el.name}</span>
                  })
                ) : <span>You dont have any favourite drink yet.</span>}
            </div>
          </div>
          <div className="day-meal">
            <div className="breakfast">
              <span>Breakfast Plans:</span>
              {currentUser.breakfast.length ? (
                currentUser.breakfast.map((el) => {
                  return <span key={el._id} id={el._id}>{el.name}</span>
                })
              ) : <span>You dont have a plan for breakfast yet.</span>}
            </div>
            <div className="lunch">
              <span>Lunch Plans:</span>
                {currentUser.lunch.length ? (
                  currentUser.breakfast.map((el) => {
                    return <span key={el._id} id={el._id}>{el.name}</span>
                  })
                ) : <span>You dont have a plan for lunch yet.</span>}
            </div>
            <div className="dinner">
              <span>Dinner Plans:</span>
                {currentUser.dinner.length ? (
                  currentUser.breakfast.map((el) => {
                    return <span key={el._id} id={el._id}>{el.name}</span>
                  })
                ) : <span>You dont have a plan for dinner yet.</span>}
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

export default Profile