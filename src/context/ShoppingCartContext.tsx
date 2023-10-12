import { ReactNode, createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLoacalStorage";

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItem: CartItem[];
};

export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

type ShppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

export function ShoppingCartProvider({ children }: ShppingCartProviderProps) {
  const [cartItem, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

  const [isOpen, setIsOpen] = useState(false);

  const getQuantity = (id: number) => {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  function removeFromCart(id: number) {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  }
  const cartQuantity = cartItem.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        getQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartItem,
        cartQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
      {isOpen && <ShoppingCart />}
    </ShoppingCartContext.Provider>
  );
}
