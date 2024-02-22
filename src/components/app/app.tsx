import React from "react";
import Header from "../header";
import RandomPlanet from "../random-planet/random-planet";
import ItemDetails from "../item-details/item-details";
import ItemList from "../item-list";
import PlanetsPage from "../pages/swapi/planets-page";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../layout";
import { Box, Container } from "@mui/material";

const App = (props: {}) => {
  // const mode = useSelector((state) => state.global.mode);
  // const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <>
      <BrowserRouter>
        <Box bgcolor="background.default">
          <Container color="primary" sx={{ bgcolor: "divider" }}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="planets/" element={<PlanetsPage />} />
                <Route path="*" element={<h1>PageNotFound!</h1>} />
              </Route>
            </Routes>
          </Container>
        </Box>
      </BrowserRouter>
    </>
  );
};

export default App;
