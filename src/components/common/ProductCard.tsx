import Link from "next/link";
import type { Product } from "@/types";
import { formatCurrency } from "@/lib/format";
import { Badge, ProductImage, RatingStars } from "@/components/ui";
import { WishlistButton } from "@/components/common/WishlistButton";
import { QuickAddButton } from "@/components/common/QuickAddButton";

export function ProductCard({ product }: { product: Product }) {
  return <article className="product-card"><div className="product-card-media"><Link href={`/product/${product.slug}`} aria-label={`Xem ${product.name}`}><ProductImage src={product.image} alt={product.name} /></Link>{product.badge && <Badge tone={product.badge === "Flash sale" ? "danger" : product.badge === "Mới về" ? "accent" : "warning"}>{product.badge}</Badge>}<WishlistButton productId={product.id} /></div><div className="product-card-body"><Link href={`/product/${product.slug}`} className="product-name">{product.name}</Link><p className="product-shop">{product.shop.name} <span>·</span> {product.shop.location}</p><RatingStars rating={product.rating} count={product.reviewCount} compact /><div className="product-price-row"><strong>{formatCurrency(product.price)}</strong><span className="product-old-price">{formatCurrency(product.originalPrice)}</span></div><div className="product-meta"><span>Đã bán {product.soldCount > 999 ? `${(product.soldCount / 1000).toFixed(1)}k` : product.soldCount}</span><span className="discount">-{product.discountPercentage}%</span></div><QuickAddButton product={product} /></div></article>;
}
