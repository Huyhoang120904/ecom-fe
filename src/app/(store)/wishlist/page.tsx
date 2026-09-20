import { ButtonLink } from "@/components/ui";
import { ProductCard } from "@/components/common/ProductCard";
import { products } from "@/lib/mock-data";
import Link from "next/link";

export default function WishlistPage() {
  return <div className="container cart-page"><div className="breadcrumbs"><Link href="/">Trang chủ</Link><span>›</span><span>Yêu thích</span></div><div className="section-heading"><div><p className="eyebrow">Bộ sưu tập riêng</p><h1>Sản phẩm yêu thích</h1><p className="section-description">Những món đồ bạn muốn nhớ đến cho một ngày phù hợp.</p></div><ButtonLink href="/products" variant="outline">Khám phá thêm</ButtonLink></div><div className="product-grid">{products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} />)}</div></div>;
}
