import { ProductCard } from "@/components/common/ProductCard";
import { products } from "@/lib/mock-data";

export default function AccountWishlistPage() { return <div className="account-card"><h2>Yêu thích</h2><p className="muted">Các sản phẩm bạn đã lưu.</p><div className="product-grid">{products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} />)}</div></div>; }
