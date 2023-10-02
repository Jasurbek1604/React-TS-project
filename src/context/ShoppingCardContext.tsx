import { createContext, useContext, ReactNode, useState } from "react";

type ShoppingCardProviderProps = {
  children: ReactNode;
};

type ShoppingCardContext = {
  getItem: (id: number) => number;
  inc: (id: number) => void;
  dec: (id: number) => void;
  rm: (id: number) => void;
};

type CartItem = {
  id: number;
  quantity: number;
};

const ShoppingCardContext = createContext({} as ShoppingCardContext);

export function useShoppingCard() {
  return useContext(ShoppingCardContext);
}

export function ShoppingCardProvider({ children }: ShoppingCardProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <ShoppingCardContext.Provider value={{}}>
      {children}
    </ShoppingCardContext.Provider>
  );
}
