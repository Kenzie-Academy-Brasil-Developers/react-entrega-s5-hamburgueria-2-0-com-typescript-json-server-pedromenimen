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

export const style = {
  border: { mobile: "black solid 1px", desktop: "none" },
  padding: "15px",
  borderRadius: "5px",
  "& .toRegister:hover": {
    cursor: "pointer",
    textDecoration: "underline",
  },
  "& form": {
    display: "flex",
    flexDirection: "column",
    "& button": {
      backgroundColor: "#27ae60",
      margin: "15px 0",
    },
    "& input": {},
  },
};
