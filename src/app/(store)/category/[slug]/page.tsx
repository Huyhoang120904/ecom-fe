import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/common/ProductCard";
import { categories, products } from "@/lib/mock-data";

export function generateStaticParams() { return categories.map((category) => ({ slug: category.slug })); }

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) notFound();
  const categoryProducts = products.filter((product) => product.category === category.name);
  return <><section className="page-hero"><div className="container"><div className="breadcrumbs"><Link href="/">Trang chủ</Link><span>›</span><span>Danh mục</span><span>›</span><span>{category.name}</span></div><h1>{category.name}</h1><p className="section-description">{category.count.toLocaleString("vi-VN")} sản phẩm được chọn lọc để bạn tìm thấy đúng thứ mình cần.</p></div></section><div className="container listing-layout"><aside className="filter-panel"><h3>Lọc {category.name}</h3><div className="filter-group"><strong>Danh mục con</strong>{["Mới về", "Bán chạy", "Đang giảm giá"].map((item) => <label key={item} className="check-row"><input type="checkbox" /> {item}</label>)}</div><div className="filter-group"><strong>Mức giá</strong><label className="check-row"><input type="checkbox" /> Dưới 500K</label><label className="check-row"><input type="checkbox" /> 500K – 2 triệu</label><label className="check-row"><input type="checkbox" /> Trên 2 triệu</label></div></aside><section><div className="listing-toolbar"><p>{categoryProducts.length || 0} sản phẩm trong {category.name}</p><select className="sort-select" defaultValue="featured" aria-label="Sắp xếp sản phẩm"><option value="featured">Nổi bật</option><option value="new">Mới nhất</option></select></div>{categoryProducts.length ? <div className="product-grid">{categoryProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty-state"><div className="empty-icon">⌁</div><h3>Đang cập nhật thêm lựa chọn</h3><p>Ghé lại sớm nhé, chúng tôi đang tìm những sản phẩm phù hợp nhất.</p></div>}</section></div></>;
}
