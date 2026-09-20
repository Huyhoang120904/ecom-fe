import Link from "next/link";
import { notFound } from "next/navigation";
import { Button, ButtonLink, ProductImage, RatingStars, SectionHeading } from "@/components/ui";
import { ProductCard } from "@/components/common/ProductCard";
import { products, shops } from "@/lib/mock-data";

export function generateStaticParams() { return shops.map((shop) => ({ slug: shop.slug })); }

export default async function ShopPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const shop = shops.find((item) => item.slug === slug);
  if (!shop) notFound();
  const shopProducts = products.filter((product) => product.shop.id === shop.id);
  return <div className="container detail-wrap"><div className="breadcrumbs"><Link href="/">Trang chủ</Link><span>›</span><span>Shop</span><span>›</span><span>{shop.name}</span></div><div className="shop-cover" style={{ minHeight: 250, borderRadius: 24, backgroundImage: `url(${shop.cover})`, backgroundPosition: "center", backgroundSize: "cover" }} /><div className="account-card" style={{ marginTop: -50, position: "relative", padding: 25 }}><div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}><ProductImage src={shop.avatar} alt={shop.name} className="shop-avatar" /><div style={{ flex: 1 }}><h1 style={{ margin: 0, fontSize: 28 }}>{shop.name} {shop.verified && <span className="verified">✓</span>}</h1><p className="muted" style={{ margin: "5px 0" }}>{shop.location} · Hoạt động 3 giờ trước</p><RatingStars rating={shop.rating} count={shop.productCount} /></div><div className="seller-actions"><Button variant="outline">♡ Theo dõi</Button><ButtonLink href="#products" variant="primary">Xem sản phẩm</ButtonLink></div></div></div><div className="detail-tabs" style={{ marginTop: 30 }}><button className="detail-tab active">Trang chủ</button><button className="detail-tab">Tất cả sản phẩm ({shop.productCount})</button><button className="detail-tab">Bán chạy</button><button className="detail-tab">Đánh giá</button></div><section id="products" className="page-section" style={{ paddingBottom: 0 }}><SectionHeading eyebrow="Từ {shop.name}" title="Sản phẩm nổi bật" href="/products" /><div className="product-grid">{(shopProducts.length ? shopProducts : products.slice(0, 4)).map((product) => <ProductCard key={product.id} product={product} />)}</div></section></div>;
}
