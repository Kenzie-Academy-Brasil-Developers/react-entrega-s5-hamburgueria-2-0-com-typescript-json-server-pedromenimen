import { useCart } from "../../providers/Cart";
import Card from "../Card";

const CartComponent = () => {
  const { cart } = useCart();

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {cart.map((item) => (
        <Card
          onCart={true}
          key={item.id}
          name={item.name}
          type={item.type}
          price={item.price}
          img={item.img}
          id={item.id}
          userId={item.userId}
        />
      ))}
    </div>
  );
};
export default CartComponent;
