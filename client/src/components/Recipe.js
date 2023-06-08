
function Recipe ({recipe}) {
  if(recipe) {
    return (
      <div className="recipe-container">
        <div className="recipe-name">{recipe.name}</div>
        <div className="instructions-label">Instructions:
        <div>{recipe.instructions}
        </div>
        </div>
      </div>
    )
  }
}

export default Recipe

{/* <div className="recipe-container">
<div className="recipe-name">Beetroot Hummus</div>
<div className="ingredients-label">Ingredients:
  <ul className="ingredients">
    <li>5kg Carrots</li>
    <li>100g Cumin Seeds</li>
    <li>100g Coriander Seeds</li>
    <li>50g Fennel Seeds</li>
    <li>50g Maldon Salt</li>
    <li>25g Cracked Black Pepper</li>
  </ul>
</div>
<div className="instructions-label">Instructions:
<div>Mix all together with olive oil and Roast at 180'c for around 45 minutes, till the beetroot are cooked and nicely coloured.
  Once cooked blend with the spices from the tray in the Robot coupe.Into the same blender add 500g Raw Tahini and 100ml Water, 
  50ml Lemon Juice and Season to taste. Mix all together, add a little more tahini If its a bit runny."
</div>
</div>
</div> */}