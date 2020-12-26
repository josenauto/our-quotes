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
    <section className="container-quote">
      <div className="container-img">
        <img
          className="img-author"
          src={image}
          alt={name}
          width="150"
          height="200"
        />
      </div>
      <h3 className="name-author">{name}</h3>
      <p className="country-author">{country}</p>
      <p className="text-author">{text}</p>
      <div className="container-buttons">
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
