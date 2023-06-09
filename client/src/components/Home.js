import Profile from "./Profile"
function Home({isAuthenticated}) {
  
  if(isAuthenticated) {
    return(
      //TODO:logic on what to show if user is logged in.
      <></>
    )
  } else {
    return(
      <div className="homepage-container">
        <div className="description">
          Confit Garlic Mash
          10 Portions
          1250g Peeled Chippies Choice Potatoes
          250g Unsalted Butter
          150g Confit Garlic Oil
          Method:
          Slice the potatoes into equal thickness before cooking it
          simmer it rather than boiling. Once
          cooked, drain
          and let it dry out in a hot area. Once dry, whip it in a machine with the butter before
          adding the confit garlic oil then check it for seasoning.
          Serve it with garlic chives
          <img src="../../public/images/Memento_poster.jpg" alt=""></img>
        </div>
        <Profile />
      </div>
    )
  }
}

export default Home