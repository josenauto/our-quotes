import React, { useState } from "react";
import authors from "./data";

const Quotes = () => {
  const [index, setIndex] = useState(0);
  const { name, country, image, text } = authors[index];

  const checkNumber = (number) => {
    if (number > authors.length - 1) {
      return 0;
    }
    if (number < 0) {
      return authors.length - 1;
    }
    return number;
  };

  const prevAuthor = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextAuthor = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const randomAuthor = () => {
    let randomNumber = Math.floor(Math.random() * authors.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <section>
      <div>
        <img src={image} alt={name} />
      </div>
      <h4>{name}</h4>
      <p>{country}</p>
      <p>{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevAuthor}>
          &#x2b9c;
        </button>
        <button className="next-btn" onClick={nextAuthor}>
          &#x2b9e;
        </button>
      </div>
      <button className="random-btn" onClick={randomAuthor}>
        Random
      </button>
    </section>
  );
};

export default Quotes;
