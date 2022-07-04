import { useState, useEffect } from "react";
import Ingredients from "../data.json";

function Compose(props) {
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState(0);
  const [base, setBase] = useState(700);
  useEffect(() => {
    Ingredients.map((ingredient) => {
      ingredient.checked = ingredient.cost === 0 ? true : false;
      return ingredient;
    });
    setIngredients(Ingredients);
  }, []);
  useEffect(() => {
    setPrice(
      ingredients.reduce((summary, ingredient) => {
        return ingredient.checked ? summary + ingredient.cost : summary;
      }, base)
    );
  }, [base, ingredients]);
  const ingredientChange = (ingredient) => {
    setIngredients(
      ingredients.map((el) => {
        if (el.name === ingredient.name) el.checked = !el.checked;

        return el;
      })
    );
  };
  const changeSize = (size) => {
    setBase(size);
  };
  const addPizza = () => {
    let size = "Medium";
    if (base === 500) {
      size = "Small";
    } else if (base === 1100) {
      size = "Big";
    }
    let pizza = { size: size, price: price, ingredients: [] };
    ingredients.forEach((ingredient) => {
      if (ingredient.checked) pizza.ingredients.push(ingredient);
    });
    props.getPizza(pizza);
  };
  return (
    <div className="compose">
      <h1>Compose pizza</h1>
      <h4>Price: {(price / 100).toFixed(2)}$</h4>
      <div>
        <img
          className={"size small " + (base === 500 ? "checked" : "")}
          onClick={() => changeSize(500)}
          src={process.env.PUBLIC_URL + "/assets/size.png"}
          alt="small size"
        />
        <img
          className={"size medium " + (base === 700 ? "checked" : "")}
          onClick={() => changeSize(700)}
          src={process.env.PUBLIC_URL + "/assets/size.png"}
          alt="medium size"
        />
        <img
          className={"size big " + (base === 1000 ? "checked" : "")}
          onClick={() => changeSize(1000)}
          src={process.env.PUBLIC_URL + "/assets/size.png"}
          alt="big size"
        />
      </div>
      <div>
        <button className="btn" onClick={() => addPizza()}>
          Add
        </button>
      </div>
      <div className="ingredients">
        {ingredients.map((ingredient, index) => {
          return (
            <div key={index} className="ingredientRow">
              <input
                type="checkbox"
                checked={ingredient.checked}
                onChange={() => ingredientChange(ingredient)}
              />
              <img
                className="ingredient_icon"
                src={
                  process.env.PUBLIC_URL + "/assets/" + ingredient.name + ".png"
                }
                alt={ingredient.name}
              />
              <p>{ingredient.name}</p>
              {ingredient.cost === 0 ? (
                <p class="ingredient_price">free</p>
              ) : (
                <p class="ingredient_price">
                  {(ingredient.cost / 100).toFixed(2)}$
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Compose;
