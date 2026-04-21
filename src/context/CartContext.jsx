import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ➕ Add item
  const addToCart = (item) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === item.id);

      if (exist) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }

      return [...prev, { ...item, qty: 1 }];
    });
  };

  // ➖ Decrease item
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // ➕ Increase item
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQty, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
};