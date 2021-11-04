import React from "react";
import Routes from "./routes/index";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./components/Login/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
