import services from "./Services"

function Home({isAuthenticated}) {

  function sendCategory (e) {
    const cat = e.target.id
    console.log(cat)
    services.fetchRecipeByCat(cat).then((res) => {
      console.log(res, 'result')
    })
  }
  
  if(isAuthenticated) {
    return(
      //TODO:logic on what to show if user is logged in.
      <></>
    )
  } else {
    return(
      <div className="homepage-container">
        <div className="category-container starter">
        <div class="btn-2">
            <a><span><div id="starters" onClick={sendCategory} className="category-name">Starters</div></span></a>
        </div>
          <div className="category-description">
            From simple and delicious soups and salads to more elaborate tarts and terrines,
           be inspired to start your meal with a taste sensation. See all starter recipes.
          </div>
          <div class="btn-1">
            <a><span id="starters" onClick={sendCategory}>Check Starters</span></a>
          </div>
        </div>
        <div className="category-container mains">
        <div class="btn-1">
            <a><span><div className="category-name" id="mains" onClick={sendCategory}>Mains</div></span></a>
        </div>
          <div className="category-description">
          Hundreds of main dish recipes. Choose from top-rated comfort food, healthy, and vegetarian options.
           Find your dinner star now!
          </div>
          <div class="btn-2">
            <a><span id="mains" onClick={sendCategory}>Check Mains</span></a>
          </div>
        </div>
        <div className="category-container dessert">
        <div class="btn-2">
            <a><span><div className="category-name" id="desserts" onClick={sendCategory}>Desserts</div></span></a>
        </div>
          <div className="category-description">
            Why stop after the mains?
            Always end it on a high note I always say.
            You should get your just dessert.
            {/* Treat yourself to some desserts. */}
          </div>
          <div class="btn-1">
            <a><span id="desserts" onClick={sendCategory}>Check Desserts</span></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home