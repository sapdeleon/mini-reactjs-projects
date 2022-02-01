import React from "react";
import Greeting from "./Greeting";
import foods from "../data/food";

const Food = (props) => (
  <div className="term">
    <dt>
      <img className="food-img" src={props.img} alt="food-img" />
      <span>{props.name}</span>
    </dt>
    <dd>
      {props.description}
      <a href="#top"> ...read more</a>
    </dd>
  </div>
);

const App = () => {
  return (
    <div>
      <h1>
        <span>My Favourite Food</span>
      </h1>
      <dl className="dictionary">
        {foods.map((food) => (
          <Food
            key={food.id}
            img={food.image}
            name={food.name}
            description={food.description}
          />
        ))}
      </dl>
      <Greeting />
    </div>
  );
};

export default App;
