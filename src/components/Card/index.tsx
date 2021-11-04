import { Button, Typography } from "@material-ui/core";
import { Box } from "./styles";
import { useState } from "react";
import { ProductsData } from "../../providers/Products";
import { useCart } from "../../providers/Cart";
const Card = ({ name, type, price, img, id, userId }: ProductsData) => {
  const { addToCart } = useCart();
  const product = {
    name: name,
    type: type,
    price: price,
    img: img,
    id: id,
    userId: userId,
  };
  const [hoverColor, setHoverColor] = useState("#bdbdbd");
  return (
    <Box
      color={hoverColor}
      onMouseEnter={() => setHoverColor("#27AE60")}
      onMouseLeave={() => setHoverColor("#bdbdbd")}
    >
      <img src={product.img} alt={product.name} />
      <Typography title={product.name} className="title">
        {product.name}
      </Typography>
      <Typography>{product.type}</Typography>
      <Typography className="price">R$ {product.price}</Typography>
      <Button onClick={() => addToCart(product)} variant="contained">
        Adicionar
      </Button>
    </Box>
  );
};

export default Card;
