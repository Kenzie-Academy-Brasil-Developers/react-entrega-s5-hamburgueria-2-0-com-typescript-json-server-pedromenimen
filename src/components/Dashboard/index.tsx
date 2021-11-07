import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useProducts } from "../../providers/Products";
import Card from "../Card/index";
import style from "./styles";
import { Typography } from "@material-ui/core";
import jwt_decode from "jwt-decode";
import { useUser } from "../../providers/Users";
import { useCart } from "../../providers/Cart";
import SearchComponent from "../Search";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchPopoverComponent from "../Search Popover/";
import IconButton from "@mui/material/IconButton";
import CartModal from "../Cart Modal";

interface DecodedData {
  email: string;
  iat: number;
  exp: number;
  sub: string;
}

const ContentDashboard = () => {
  const { token, logOut } = useUser();
  const { getCart, cart } = useCart();
  const { products, getProducts } = useProducts();
  useEffect(() => {
    getProducts();
    getCart();
    const decoded = jwt_decode<DecodedData>(token);
    localStorage.setItem("userId", decoded.sub);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [width, setWidth] = useState<number>(window.innerWidth);
  window.onresize = () => {
    setWidth(window.innerWidth);
  };
  const acompamProducts = products.filter((item) => item.type === "acomp");
  const pizzaProducts = products.filter((item) => item.type === "pizza");
  const extraProducts = products.filter((item) => item.type === "extra");
  const sandwichProducts = products.filter((item) => item.type === "sandwich");

  if (width <= 769) {
    return (
      <Box
        sx={style}
        onClick={() => {
          getProducts();
        }}
      >
        <Box className="IconsMobile">
          <SearchPopoverComponent />
          <CartModal />
          <IconButton onClick={() => logOut()}>
            <LogoutIcon />
          </IconButton>
        </Box>
        <Typography>Sanduíches</Typography>
        <Box className="MobileList">
          {sandwichProducts.map((item) => (
            <Card
              onCart={false}
              key={item.id}
              name={item.name}
              type={item.type}
              price={item.price}
              img={item.img}
              id={item.id}
              userId={item.userId}
            />
          ))}
        </Box>
        <Typography>Extras</Typography>
        <Box className="MobileList">
          {extraProducts.map((item) => (
            <Card
              onCart={false}
              key={item.id}
              name={item.name}
              type={item.type}
              price={item.price}
              img={item.img}
              id={item.id}
            />
          ))}
        </Box>
        <Typography>Acompanhamentos</Typography>
        <Box className="MobileList">
          {acompamProducts.map((item) => (
            <Card
              onCart={false}
              key={item.id}
              name={item.name}
              type={item.type}
              price={item.price}
              img={item.img}
              id={item.id}
            />
          ))}
        </Box>
        <Typography>Pizzas</Typography>
        <Box className="MobileList">
          {pizzaProducts.map((item) => (
            <Card
              onCart={false}
              key={item.id}
              name={item.name}
              type={item.type}
              price={item.price}
              img={item.img}
              id={item.id}
            />
          ))}
        </Box>
      </Box>
    );
  } else {
    return (
      <Box sx={style}>
        <Box className="IconsDesktop">
          <SearchComponent />
          <CartModal />
          <IconButton onClick={() => logOut()}>
            <LogoutIcon />
          </IconButton>
        </Box>
        <Box className="DesktopList">
          {products.map((item) => (
            <Card
              onCart={false}
              key={item.id}
              name={item.name}
              type={item.type}
              price={item.price}
              img={item.img}
              id={item.id}
            />
          ))}
        </Box>
      </Box>
    );
  }
};

export default ContentDashboard;
