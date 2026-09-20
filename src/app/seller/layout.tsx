import Link from "next/link";
import { SellerSidebar } from "@/components/layout/SellerSidebar";

export default function SellerLayout({ children }: { children: React.ReactNode }) {
  return <div className="seller-shell"><header className="seller-header"><div className="seller-header-left"><Link href="/" className="brand"><span className="brand-mark">e</span><span>ecome<span className="brand-dot">.</span></span></Link><span className="seller-breadcrumb">Seller Center · NOVA TECH</span></div><div className="seller-header-actions"><Link href="/" aria-label="Xem gian hàng">↗</Link><Link href="/account/notifications" aria-label="Thông báo">◌</Link><span className="account-avatar">NT</span></div></header><div className="seller-layout"><SellerSidebar /><main className="seller-main">{children}</main></div></div>;
}
