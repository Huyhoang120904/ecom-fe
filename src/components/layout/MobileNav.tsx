import Link from "next/link";

export function MobileNav() {
  return <nav className="mobile-nav"><Link href="/"><span>⌂</span>Trang chủ</Link><Link href="/products"><span>⌕</span>Khám phá</Link><Link href="/cart"><span>♧</span>Giỏ hàng</Link><Link href="/account"><span>◯</span>Tài khoản</Link></nav>;
}
