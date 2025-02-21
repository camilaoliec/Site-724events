import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useMemo, useState } from "react";
import { useData } from "../../contexts/DataContext/index.js";
import { getMonth } from "../../helpers/Date/index.js";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);

  if (!data || !data.focus) {
    console.log("Données non chargées !");
    return <p>Chargement des événements...</p>;
  }

  const byDateDesc = [...data.focus].sort(
    (evtA, evtB) => new Date(evtB.date) - new Date(evtA.date)
  );
  const uuids = useMemo(() => byDateDesc.map(() => uuidv4()), [byDateDesc]);
  const radioKeys = useMemo(() => byDateDesc.map(() => uuidv4()), [byDateDesc]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(index < byDateDesc.length - 1 ? index + 1 : 0);
    }, 5000);
    return () => clearTimeout(timer);
  }, [index]);

  // Clique no botao do slide!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <>
          <div
            key={uuids[idx]}
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
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                  key={radioKeys[radioIdx]}
                  type="radio"
                  name="radio-button"
                  checked={index === radioIdx}
                  onChange={() => setIndex(radioIdx)}
                />
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Slider;
