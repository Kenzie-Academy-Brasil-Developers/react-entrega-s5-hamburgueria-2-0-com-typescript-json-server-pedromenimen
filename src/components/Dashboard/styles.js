const style = {
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  "& .MobileList": {
    display: "flex",
    flexDirection: "row",
    overflow: "auto",
  },
  "& .DesktopList": {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  "& .IconsMobile": {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    justifyContent: "flex-end",
    padding: 25,
  },
  "& .IconsDesktop": {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    margin: 0,
    padding: 20,
    alignItems: "center"
  },
  "& .IconsMobile svg": {
    color: "#bdbdbd",
    fontSize: "150%",
  },
};

export default style;
