"use client";

import { useState } from "react";

export function WishlistButton({ productId }: { productId: string }) {
  const [saved, setSaved] = useState(false);
  return <button className={`wishlist-button ${saved ? "is-saved" : ""}`} aria-label={saved ? `Bỏ lưu ${productId}` : `Lưu ${productId}`} onClick={() => setSaved((current) => !current)}>{saved ? "♥" : "♡"}</button>;
}
