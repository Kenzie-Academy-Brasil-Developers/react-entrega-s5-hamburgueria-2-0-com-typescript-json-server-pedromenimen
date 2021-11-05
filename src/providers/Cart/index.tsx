import { createContext, useContext, ReactNode } from "react";
import api from "../../services/index";
import { ProductsData } from "../Products/index";
import jwt_decode from "jwt-decode";

interface CartProviderProps {
  children: ReactNode;
}

interface CartProviderData {
  addToCart: (productData: ProductsData) => void;
  deleteFromCart: (productData: ProductsData) => void;
}

export const CartContext = createContext<CartProviderData>(
  {} as CartProviderData
);

export const CartProvider = ({ children }: CartProviderProps) => {

  const addToCart = (product: ProductsData) => {
    const userId = Number(localStorage.getItem("userId"))
    const newProduct = {...product, userId: userId}
    console.log(userId)
    console.log(newProduct)
    // api
    //   .post("/cart", product, {
    //     headers: {
    //       Authorization: `Bearer: ${localStorage.getItem("token")}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));
  };

  const deleteFromCart = (productData: ProductsData) => {
    api
      .post("/cart", productData, {
        headers: {
          Authorization: `Bearer: ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <CartContext.Provider value={{ addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
