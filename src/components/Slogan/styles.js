const style = {
  display: "flex",
  height: 95,
  width: 377,
  flexDirection: "row",
  border: "#e0e0e0 solid 2px",
  borderRadius: 5,
  "& .LocalMallOutlinedIconContainer": {
    backgroundColor: "#e9f7ef",
    flex: 2,
    position: "relative",
    borderRadius: 5,
    margin: "15px 20px",
    "& > svg": {
      color: "green",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
  "& .SloganContainer": {
    flex: 6,
    margin: "10px 15px",
  },
};

export default style;
