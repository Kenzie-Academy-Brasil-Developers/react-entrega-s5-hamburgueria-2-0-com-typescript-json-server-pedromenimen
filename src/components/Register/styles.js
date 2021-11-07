export const style = {
  marginTop: { desktop: "5vw" },
  border: { mobile: "black solid 1px", desktop: "none" },
  padding: { mobile: "15px", desktop: "15px 250px" },
  borderRadius: "5px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
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
  "& .Slogan": {
    flex: 1,
  },
  "& .Oresto": {
    flex: 1,
  },
};
