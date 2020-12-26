import React, {useState} from "react";
import authors from "./data";

const Quotes = () => {
  const [index, setIndex] = useState(0)
  const {name, country, image, text } = authors[index];
  return (
    <section>
      <div>
        <img src={image} alt={name} />
      </div>
      <h4>{name}</h4>
      <p>{country}</p>
      <p>{text}</p>
      <div className="button-container">
        <button className="prev-btn">&#x2b9c;</button>
        <button className="next-btn">&#x2b9e;</button>
      </div>
      <button className="random-btn">Random</button>
    </section>
  );
};

export default Quotes;
