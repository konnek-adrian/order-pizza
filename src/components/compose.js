import { useState, useEffect } from "react";
import Ingredients from "../data.json";

function Compose() {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {}, []);

  return (
    <div className="compose">
      <h1>Compose pizza</h1>
      <h4>Price: 0$</h4>
      <div>
        <img src={process.env.PUBLIC_URL + "/assets/size.png"} alt="size" />
      </div>

      <div className="ingredients">
        {Ingredients.map((ingredient, index) => {
          return (
            <div key={index} className="ingredientRow">
              <input type="checkbox" />
              <img
                className="ingredient_icon"
                src={
                  process.env.PUBLIC_URL + "/assets/" + ingredient.name + ".png"
                }
                alt={ingredient.name}
              />
              <p>{ingredient.name}</p>
              {ingredient.cost === 0 ? (
                <p>free</p>
              ) : (
                <p>{(ingredient.cost / 100).toFixed(2)}$</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Compose;
