"use client";

import { useState } from "react";
import type { Product } from "@/types";
import { useCart } from "@/features/cart/cart-context";

export function QuickAddButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  return <button className={`quick-add ${added ? "is-added" : ""}`} onClick={() => { addItem(product, 1, product.options?.[0]?.values[0]); setAdded(true); }} aria-label={`Thêm nhanh ${product.name}`}>{added ? "Đã thêm ✓" : "+ Thêm nhanh"}</button>;
}
