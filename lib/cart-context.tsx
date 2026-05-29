"use client";
import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  emoji: string;
  weight: string;
  price: number;
  qty: number;
}

interface CartContextValue {
  items: CartItem[];
  totalQty: number;
  totalAmount: number;
  setQty: (id: string, name: string, emoji: string, weight: string, price: number, qty: number) => void;
  getQty: (id: string) => number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const setQty = useCallback(
    (id: string, name: string, emoji: string, weight: string, price: number, qty: number) => {
      setItems((prev) => {
        const existing = prev.find((i) => i.id === id);
        if (qty <= 0) return prev.filter((i) => i.id !== id);
        if (existing) return prev.map((i) => (i.id === id ? { ...i, qty } : i));
        return [...prev, { id, name, emoji, weight, price, qty }];
      });
    },
    []
  );

  const getQty = useCallback(
    (id: string) => items.find((i) => i.id === id)?.qty ?? 0,
    [items]
  );

  const clearCart = useCallback(() => setItems([]), []);

  const totalQty = items.reduce((s, i) => s + i.qty, 0);
  const totalAmount = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ items, totalQty, totalAmount, setQty, getQty, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
