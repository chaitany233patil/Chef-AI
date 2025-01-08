/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

export default function IngredientList({ ingredients, getRecipe }) {
  let ingredientListItems = ingredients.map((item) => {
    return (
      <li className="ingredient-li  " key={item}>
        {item}
      </li>
    );
  });

  return (
    <section>
      <h2>Ingredients on hand :</h2>
      <ul className="ul-list">{ingredientListItems}</ul>
      {ingredients.length >= 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe ?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button className="get-recipe-btn" onClick={getRecipe}>
            Generate Recipe
          </button>
        </div>
      )}
    </section>
  );
}
