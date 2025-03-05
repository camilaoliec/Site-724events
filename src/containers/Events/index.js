import React, { useState } from "react";
import EventCard from "../../components/EventCard/index.js";
import Select from "../../components/Select/index.js";
import { useData } from "../../contexts/DataContext/index.js";
import Modal from "../Modal/index.js";
import ModalEvent from "../ModalEvent/index.js";

import "./style.css";

const PER_PAGE = 9;

const EventList = () => {
  const { data, error } = useData();
  const [type, setType] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const filteredByType = !type
    ? data?.events || []
    : data?.events.filter((event) => event.type === type) || [];

  const sortedEvents = [...filteredByType].sort((a, b) => new Date(a.date) - new Date(b.date));

  const paginatedEvents =
    sortedEvents.slice(
          (currentPage - 1) * PER_PAGE,
          currentPage * PER_PAGE
        );

  const changeType = (evtType) => {
    console.log("tipo selecionado", evtType)
    setCurrentPage(1);
    setType(evtType);
  };
  const pageNumber = Math.ceil(filteredByType.length / PER_PAGE);
  const typeList = Array.from(new Set(data?.events.map((event) => event.type)));
  return (
    <>
      {error && <div>An error occured</div>}
      {data === null ? (
        "loading"
      ) : (
        <>
          <h3 className="SelectTitle">Catégories</h3>
          <Select
            selection={Array.from(typeList)}
            onChange={(value) => { console.log("valor recebido no select", value); changeType(value || null)}}
          />
          <div id="events" className="ListContainer">
            {paginatedEvents.map((event) => (
              <Modal key={event.id} Content={<ModalEvent event={event} />}>
                {({ setIsOpened }) => (
                  <EventCard
                    onClick={() => setIsOpened(true)}
                    imageSrc={event.cover}
                    title={event.title}
                    date={new Date(event.date)}
                    label={event.type}
                  />
                )}
              </Modal>
            ))}
          </div>
          <div className="Pagination">
            {[...Array(pageNumber)].map((_, n) => (
              // eslint-disable-next-line react/no-array-index-key
              <a key={n} href="#events" onClick={() => setCurrentPage(n + 1)}
                className={currentPage === n + 1 ? "active" : ""}>
                {n + 1}
              </a>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default EventList;
