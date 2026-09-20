"use client";

import Link from "next/link";
import { useCart } from "@/features/cart/cart-context";
import { SearchBar } from "@/components/common/SearchBar";

export function StoreHeader() {
  const { count } = useCart();

  return <>
    <div className="announcement"><div className="container announcement-inner"><span>Đơn từ 299K · miễn phí vận chuyển hôm nay</span><span className="announcement-right">Trở thành người bán <span>Trung tâm hỗ trợ</span></span></div></div>
    <header className="store-header">
      <div className="container header-main">
        <Link href="/" className="brand"><span className="brand-mark">e</span><span>ecome<span className="brand-dot">.</span></span></Link>
        <Link href="/products" className="category-link"><span className="menu-icon">☰</span> Danh mục</Link>
        <SearchBar />
        <nav className="header-actions"><Link href="/wishlist" aria-label="Sản phẩm yêu thích" className="header-icon">♡</Link><Link href="/cart" aria-label="Giỏ hàng" className="header-icon cart-icon">♧{count > 0 && <span>{count}</span>}</Link><Link href="/account" className="account-link"><span className="account-avatar">MA</span><span className="account-copy"><small>Xin chào,</small><strong>Tài khoản</strong></span></Link></nav>
      </div>
      <div className="container header-nav"><nav><Link href="/products">Tất cả sản phẩm</Link><Link href="/category/dien-tu">Điện tử</Link><Link href="/category/thoi-trang">Thời trang</Link><Link href="/category/nha-cua">Nhà cửa & đời sống</Link><Link href="/category/lam-dep">Làm đẹp</Link><Link href="/category/gaming">Gaming</Link></nav><Link href="/seller" className="seller-cta">Kênh người bán <span>↗</span></Link></div>
    </header>
  </>;
}
