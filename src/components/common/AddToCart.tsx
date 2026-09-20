"use client";

import { useState } from "react";
import { useCart } from "@/features/cart/cart-context";
import type { Product } from "@/types";
import { Button, QuantityInput } from "@/components/ui";

export function AddToCart({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(product.options?.[0]?.values[0] ?? "");
  const [added, setAdded] = useState(false);
  return <><div className="option-group"><div className="option-label"><span>{product.options?.[0]?.name ?? "Số lượng"}</span><span className="muted">{selected}</span></div>{product.options?.[0] && <div className="option-values">{product.options[0].values.map((value) => <button className={`option-value ${selected === value ? "active" : ""}`} key={value} onClick={() => setSelected(value)}>{value}</button>)}</div>}</div>{product.options?.[1] && <div className="option-group"><div className="option-label"><span>{product.options[1].name}</span></div><div className="option-values">{product.options[1].values.map((value, index) => <button className={`option-value ${index === 0 ? "active" : ""}`} key={value}>{value}</button>)}</div></div>}<div className="option-label"><span>Số lượng</span><span className="muted">Còn {product.stock} sản phẩm</span></div><QuantityInput value={quantity} onChange={setQuantity} /><div className="detail-actions"><Button variant="outline" size="lg" onClick={() => { addItem(product, quantity, selected); setAdded(true); }}>{added ? "Đã thêm vào giỏ ✓" : "Thêm vào giỏ"}</Button><Button size="lg" onClick={() => { addItem(product, quantity, selected); window.location.href = "/checkout"; }}>Mua ngay <span>→</span></Button></div></>;
}
