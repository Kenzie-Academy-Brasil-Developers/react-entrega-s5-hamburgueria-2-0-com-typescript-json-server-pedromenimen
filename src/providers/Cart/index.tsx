import { createContext, useContext, ReactNode, useState } from "react";
import api from "../../services/index";
import { ProductsData } from "../Products/index";

interface CartProviderProps {
  children: ReactNode;
}

interface CartProviderData {
  cart: ProductsData[];
  addToCart: (productData: ProductsData) => void;
  deleteFromCart: (productData: ProductsData) => void;
  getCart: () => void;
}

export const CartContext = createContext<CartProviderData>(
  {} as CartProviderData
);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<ProductsData[]>([]);

  const addToCart = (product: ProductsData) => {
    const userId = localStorage.getItem("userId");
    const { img, name, price, type } = product;
    const newProduct = {
      img: img,
      name: name,
      price: price,
      type: type,
      userId: userId,
    };
    console.log("newProduct:", newProduct);
    api
      .post("/cart", newProduct, {
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("token")
            ?.split('"')
            .join("")}`,
        },
      })
      .then((res) => {
        console.log("addToCart.res:", res);
        // setCart([...cart, newProduct]);
      })
      .catch((err) => console.log(err));
  };

  const getCart = () => {
    const userId = localStorage.getItem("userId");

    api
      .get(`/cart/?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("token")
            ?.split('"')
            .join("")}`,
        },
      })
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteFromCart = (productData: ProductsData) => {
    api
      .delete(`/cart/${productData.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("token")
            ?.split('"')
            .join("")}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart, getCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
