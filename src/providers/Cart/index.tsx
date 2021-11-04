import { createContext, useContext, ReactNode, useState } from "react";
import api from "../../services/index";
import { ProductsData } from "../Products/index";
import jwt_decode from "jwt-decode";
import { useProducts } from "../Products";

interface CartProviderProps {
  children: ReactNode;
}

interface DecodedData {
  email: string;
  iat: number;
  exp: number;
  sub: string;
}

interface CartProviderData {
  addToCart: (productData: ProductsData) => void;
  createCart: () => void;
  deleteFromCart: (productData: ProductsData) => void;
}

export const CartContext = createContext<CartProviderData>(
  {} as CartProviderData
);

export const CartProvider = ({ children }: CartProviderProps) => {
  const token = localStorage.getItem("token") || "";

  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState<ProductsData[]>([]);

  const [cartId, setCartId] = useState<number>(0);

  const decoded = jwt_decode<DecodedData>(token);
  const userId = decoded.sub;

  // if (cart.map(item => item.id).includes(product.id)) {

  // }
  const addToCart = (product: ProductsData) => {
    console.log(products);
    // const clicked = products.filter((item) => item.id === id);
    // api
    //   .patch("/cart", cart, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));
  };

  const createCart = () => {
    api
      .post(
        "/cart",
        { userId: userId, cartItems: [] },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.id);
        setCart(res.data.cartItems);
        setCartId(res.data.id);
      })
      .catch((err) => console.log(err));
  };

  const deleteFromCart = (productData: ProductsData) => {
    api
      .post("/cart", productData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <CartContext.Provider value={{ addToCart, createCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
