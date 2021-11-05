import { Box } from "@material-ui/core";
import { useEffect } from "react";
import { useProducts } from "../../providers/Products";
import Card from "../Card/index";
import style from "./styles";
import { Typography } from "@material-ui/core";
import jwt_decode from "jwt-decode";
import { useUser } from "../../providers/Users";

interface DecodedData {
  email: string;
  iat: number;
  exp: number;
  sub: string;
}

const ContentDashboard = () => {
  const { token } = useUser();

  const { products, getProducts } = useProducts();
  useEffect(() => {
    getProducts();
    const decoded = jwt_decode<DecodedData>(token);
    localStorage.setItem("userId", (decoded.sub));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const acompamProducts = products.filter((item) => item.type === "acomp");
  const pizzaProducts = products.filter((item) => item.type === "pizza");
  const extraProducts = products.filter((item) => item.type === "extra");
  const sandwichProducts = products.filter((item) => item.type === "sandwich");
  return (
    <Box
      sx={style}
      onClick={() => {
        getProducts();
      }}
    >
      <Typography>Sanduíches</Typography>
      <Box className="productList">
        {sandwichProducts.map((item) => (
          <Card
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
      <Box className="productList">
        {extraProducts.map((item) => (
          <Card
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
      <Box className="productList">
        {acompamProducts.map((item) => (
          <Card
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
      <Box className="productList">
        {pizzaProducts.map((item) => (
          <Card
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
};

export default ContentDashboard;
