import Link from "next/link";

const links = [
  ["◯", "Tổng quan", "/account"], ["♙", "Hồ sơ", "/account/profile"], ["⌂", "Địa chỉ", "/account/addresses"], ["▤", "Đơn mua", "/account/orders"], ["♡", "Yêu thích", "/wishlist"], ["◇", "Voucher", "/account/vouchers"], ["◌", "Thông báo", "/account/notifications"], ["⚿", "Bảo mật", "/account/security"],
];

export function AccountSidebar() {
  return <aside className="account-sidebar"><div className="side-profile"><span className="side-profile-avatar">MA</span><div><strong>Minh Anh</strong><span>Thành viên từ 2024</span></div></div>{links.map(([icon, label, href]) => <Link key={href} href={href} className="side-link"><span className="side-icon">{icon}</span>{label}</Link>)}</aside>;
}
