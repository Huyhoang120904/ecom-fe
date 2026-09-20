import Link from "next/link";

const sections = [
  { label: "Tổng quan", links: [["⌂", "Dashboard", "/seller"]] },
  { label: "Kinh doanh", links: [["▦", "Sản phẩm", "/seller/products"], ["＋", "Thêm sản phẩm", "/seller/products/new"], ["▤", "Đơn hàng", "/seller/orders"], ["↗", "Doanh thu", "/seller/revenue"]] },
  { label: "Phát triển", links: [["✦", "Đánh giá", "/seller/reviews"], ["◇", "Khuyến mãi", "/seller/promotions"], ["◌", "Khách hàng", "/seller/customers"]] },
  { label: "Gian hàng", links: [["◉", "Trang cửa hàng", "/seller/store"], ["⚙", "Cài đặt", "/seller/settings"]] },
];

export function SellerSidebar() {
  return <aside className="seller-sidebar">{sections.map((section) => <div key={section.label}><p className="seller-side-label">{section.label}</p>{section.links.map(([icon, label, href]) => <Link key={href} href={href} className="side-link"><span className="side-icon">{icon}</span>{label}</Link>)}</div>)}</aside>;
}
