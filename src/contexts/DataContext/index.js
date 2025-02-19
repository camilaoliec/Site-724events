import PropTypes from "prop-types";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const DataContext = createContext({});

export const api = {
  loadData: async () => {
    const json = await fetch("/events.json");
    return json.json();
  },
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({ focus: [] });
  const [error, setError] = useState(null);

  console.log("Valeur de data :", data);

  const getData = useCallback(async () => {
    try {
      const response = await api.loadData();
      setData(response);
    } catch (err) {
      setError(err);
    }
  }, [api]);
  useEffect(() => {
    if (data && !data.focus.length) {
      getData();
    }
  }, [data]);

  if (!data.focus.length) return <p>Chargement des événements...</p>;

  const bydatedesc = [...data.focus].sort((a,b) => new Date(b.date) - new Date(a.date));
  const last = bydatedesc[0] || null;

  return (
    <DataContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        data,
        error,
        last
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useData = () => useContext(DataContext);

export default DataContext;
