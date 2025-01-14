import { useState, useRef, useEffect } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientList from "./IngredientList";
import InputForm from "./InputForm";
import getRecipeFromMistral from "../../ai";
// import Alert from "./Alert";

export default function Main() {
  const [ingredients, setIngredients] = useState([
    "maggie",
    "maggie masala",
    "cheese",
  ]);
  const [recipe, setRecipe] = useState("");
  const recipeSection = useRef(null);
  console.log(recipeSection);
  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  let count = parseInt(localStorage.getItem("responseCount")) || 0;

  function handleFormSubmit(e) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const newIngredient = formData.get("ingredient");
    if (newIngredient)
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    formEl.reset();
  }

  async function getRecipe() {
    if (count <= 5) {
      count++;
      localStorage.setItem("responseCount", count);
      await getRecipeFromMistral(ingredients, (updateRes) => {
        setRecipe(updateRes);
      });
    } else {
      alert("you reached limit");
    }
  }

  return (
    <main>
      <InputForm handleFormSubmit={handleFormSubmit} />
      <div className="ingredient-list">
        {ingredients.length > 0 && (
          <IngredientList
            ingredients={ingredients}
            getRecipe={getRecipe}
            recipeRef={recipeSection}
          />
        )}
      </div>
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
