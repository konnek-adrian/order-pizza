import { useState, useEffect } from "react";
import Ingredients from "../data.json";

function Compose() {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {}, []);

  return (
    <div>
      <h1>Compose pizza</h1>
      {Ingredients.map((ingredient, index) => {
        return (
          <div key={index}>
            <p>{ingredient.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Compose;
