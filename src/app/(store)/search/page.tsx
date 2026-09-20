import Link from "next/link";
import { ProductCard } from "@/components/common/ProductCard";
import { searchProducts } from "@/lib/mock-data";

export default async function SearchPage({ searchParams }: { searchParams?: Promise<{ q?: string }> }) {
  const query = (await searchParams)?.q ?? "iphone";
  const results = searchProducts(query);
  return <><section className="page-hero"><div className="container"><div className="breadcrumbs"><Link href="/">Trang chủ</Link><span>›</span><span>Tìm kiếm</span></div><p className="eyebrow">Tìm kiếm</p><h1>Kết quả cho “{query}”</h1><p className="section-description">{results.length} lựa chọn phù hợp được tìm thấy.</p></div></section><div className="container listing-layout"><aside className="filter-panel"><h3>Tìm kiếm gần đây</h3><div className="filter-group"><p className="check-row">⌕ laptop văn phòng</p><p className="check-row">⌕ túi tote canvas</p><p className="check-row">⌕ đèn bàn</p></div><div className="filter-group"><strong>Đề xuất hôm nay</strong><p className="check-row">Điện tử mới về</p><p className="check-row">Shop được yêu thích</p></div></aside><section><div className="listing-toolbar"><p>Đang hiển thị <strong>{results.length}</strong> kết quả</p><select className="sort-select" defaultValue="relevant" aria-label="Sắp xếp kết quả"><option value="relevant">Liên quan nhất</option><option value="new">Mới nhất</option></select></div>{results.length ? <div className="product-grid">{results.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty-state"><div className="empty-icon">⌕</div><h3>Chưa tìm thấy sản phẩm phù hợp</h3><p>Thử một từ khóa khác hoặc khám phá các danh mục đang được yêu thích.</p></div>}</section></div></>;
}
