/* istanbul ignore file */
import React from "react";
import "./App.scss";
import Page from "./pages/Home/index.js";
import { DataProvider } from "./contexts/DataContext/index.js";

function App() {
  return (
    <DataProvider>
      <Page />
    </DataProvider>
  );
}

export default App;
