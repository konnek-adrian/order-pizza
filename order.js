import react, { useState, useEffect } from "react";

function Order(props) {
  const [cost, setCost] = useState(0);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    if (props.newPizza) {
      setOrder((clo) => [...clo, props.newPizza]);
    }
  }, [props.newPizza]);
  useEffect(() => {
    let costAll = order.reduce((summ, pizza) => summ + pizza.cost, 0);
    setCost(costAll);
  }, [order]);

  return (
    <div>
      <h1>Your order:</h1>
      {order.map((pizza, index) => {
        return (
          <div key={index}>
            <h3>
              {index + 1}# {pizza.size}
            </h3>
          </div>
        );
      })}
      <p>-------------------</p>
      <p>Total cost:{(cost / 100).toFixed(1)}$</p>
    </div>
  );
}

export default Order;
