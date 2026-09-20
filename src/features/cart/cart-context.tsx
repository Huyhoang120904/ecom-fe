"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { CartItem, Product } from "@/types";

type CartContextValue = {
  items: CartItem[];
  addItem: (product: Product, quantity?: number, variation?: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  subtotal: number;
  count: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem("ecome-cart");
    if (stored) setItems(JSON.parse(stored) as CartItem[]);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("ecome-cart", JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(() => ({
    items,
    addItem: (product, quantity = 1, variation) => setItems((current) => {
      const existing = current.find((item) => item.product.id === product.id && item.variation === variation);
      if (existing) return current.map((item) => item.product.id === product.id && item.variation === variation ? { ...item, quantity: item.quantity + quantity } : item);
      return [...current, { product, quantity, variation }];
    }),
    updateQuantity: (productId, quantity) => setItems((current) => current.map((item) => item.product.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item)),
    removeItem: (productId) => setItems((current) => current.filter((item) => item.product.id !== productId)),
    clearCart: () => setItems([]),
    subtotal: items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    count: items.reduce((sum, item) => sum + item.quantity, 0),
  }), [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart must be used inside CartProvider");
  return value;
}
