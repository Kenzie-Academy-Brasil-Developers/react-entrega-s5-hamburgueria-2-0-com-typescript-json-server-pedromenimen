export const style = {
  border: { mobile: "black solid 1px", desktop: "none" },
  padding: "15px",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "row-reverse",
  alignItems: "center",
  justifyContent: "space-evenly",
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
  },
};
