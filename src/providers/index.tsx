import { UserProvider } from "./Users";
import { ProductsProvider } from "./Products";
import { CartProvider } from "./Cart";
import { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
      <CartProvider>
        <ProductsProvider>
          <UserProvider>{children}</UserProvider>
        </ProductsProvider>
      </CartProvider>
  );
};

export default Provider;
