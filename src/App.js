/* istanbul ignore file */
import "./App.scss";
import { DataProvider } from "./contexts/DataContext/index.js";
import Page from "./pages/Home/index.js";

function App() {
  return (
    <DataProvider>
      <Page />
    </DataProvider>
  );
}

export default App;
