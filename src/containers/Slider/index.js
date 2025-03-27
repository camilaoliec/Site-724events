import React, { useCallback, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useData } from "../../contexts/DataContext/index.js";
import { getMonth } from "../../helpers/Date/index.js";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc =
    data?.focus && data.focus.length > 0
      ? data.focus.sort((evtA, evtB) =>
          new Date(evtA.date) > new Date(evtB.date) ? -1 : 1,
        )
      : [];

  const timeoutRef = useRef(null);

  const nextCard = useCallback(() => {
    setIndex((prevIndex) =>
      prevIndex < byDateDesc.length - 1 ? prevIndex + 1 : 0,
    );
  }, [byDateDesc.length]);

  useEffect(() => {
    timeoutRef.current = setTimeout(nextCard, 5000);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [index, nextCard]);

  const handleRadioChange = (radioIdx) => {
    setIndex(radioIdx);
    clearTimeout(timeoutRef.current);
  };

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <div
          key={uuidv4()}
          className={`SlideCard SlideCard--${
            index === idx ? "display" : "hide"
          }`}
        >
          <img src={event.cover} alt="forum" />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {byDateDesc.map((evt, radioIdx) => (
            <input
              key={uuidv4()}
              type="radio"
              name="radio-button"
              checked={index === radioIdx}
              onChange={() => handleRadioChange(radioIdx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
