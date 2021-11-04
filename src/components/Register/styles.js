

const style = {
  border: { mobile: "black solid 1px", desktop: "none" },
  padding: "15px",
  borderRadius: "5px",
  "& .toLogin:hover": {
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
  },
};

export default style;
