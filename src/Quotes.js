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
    </section>
  );
};

export default Quotes;
