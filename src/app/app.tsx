import React from "react";
import Header from "../components/header";
import RandomPlanet from "../components/random-planet/random-planet";
import ItemDetails from "../components/item-details/item-details";
import ItemList from "../components/item-list";
import PlanetsPage from "../pages/swapi/planets-page";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import { PeoplePage, StarshipsPage } from "../pages/swapi";

const App = (props: {}) => {
  // const mode = useSelector((state) => state.global.mode);
  // const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="planets/" element={<PlanetsPage />} />
            <Route path="people/" element={<PeoplePage />} />
            <Route path="starships/" element={<StarshipsPage />} />
            <Route path="*" element={<h1>PageNotFound!</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
