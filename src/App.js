import React from "react";
import Routes from "./routes/index";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 400,
      laptop: 550,
      desktop: 768,
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
