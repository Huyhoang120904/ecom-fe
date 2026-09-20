import type { Shop } from "@/types";
import { ButtonLink, ProductImage, RatingStars } from "@/components/ui";

export function ShopCard({ shop }: { shop: Shop }) {
  return <article className="shop-card"><ProductImage src={shop.cover} alt={`${shop.name} cover`} className="shop-cover" /><div className="shop-card-content"><ProductImage src={shop.avatar} alt={shop.name} className="shop-avatar" /><div className="shop-title"><div><h3>{shop.name} {shop.verified && <span className="verified">✓</span>}</h3><p>{shop.location}</p></div><ButtonLink href={`/shop/${shop.slug}`} size="sm" variant="outline">Xem shop</ButtonLink></div><div className="shop-stats"><RatingStars rating={shop.rating} compact /><span>{shop.followers} người theo dõi</span><span>{shop.productCount} sản phẩm</span></div></div></article>;
}
