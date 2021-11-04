import { createContext, useContext, useState, ReactNode } from "react";
import api from "../../services/index";

interface ProductsProviderProps {
  children: ReactNode;
}

export interface ProductsData {
  name: string;
  type: string;
  price: string;
  img: string;
  userId?: number;
  id?: number;
}

interface ProductsProviderData {
  getProducts: () => void;
  products: ProductsData[];
}

export const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    api
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <ProductsContext.Provider value={{ products, getProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  return context;
};
