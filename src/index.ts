import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import { ThemeProvider } from "@emotion/react";
// import theme from "./mui/theme.ts";
import { theme } from "./mui";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
