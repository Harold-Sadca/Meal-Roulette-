import { useDispatch, useSelector } from "react-redux";
import { setcategory } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import HomepageSection from "./HomepageSection";
import '../css/homepage.css'


function Home({isAuthenticated}) {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loadPage = useSelector(state => state.loadPage)
  const recipes = useSelector(state => state.recipes)

  function sendCategory (e) {
    const cat = e.target.id
    const filteredRecipe = recipes.filter((res) => res.category == cat)
    dispatch(setcategory(filteredRecipe))
    navigate(`/${cat}/recipes`)

  }

  const starterMes = 'From simple and delicious soups and salads to more elaborate tarts and terrines,be inspired to start your meal with a taste sensation. See all starter recipes.'
  const mainsMes = 'Hundreds of main dish recipes. Choose from top-rated comfort food, healthy, and vegetarian options.Find your dinner star now!'
  const desserMes = 'Why stop after the mains?Always end it on a high note I always say.You should get your just dessert.'
  
  if(!loadPage) {
    return(
      <Loader />
    )
  } else if(loadPage) {
    return(
      <div className="homepage-container">
        <HomepageSection sendCategory={sendCategory} section={'starter'} message={starterMes} />
        <HomepageSection sendCategory={sendCategory} section={'mains'} message={mainsMes} />
        <HomepageSection sendCategory={sendCategory} section={'desserts'} message={desserMes} />
      </div>
    )
  }
}

export default Home