import Link from "next/link";
import { AccountSidebar } from "@/components/layout/AccountSidebar";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return <div className="container account-page"><div className="breadcrumbs"><Link href="/">Trang chủ</Link><span>›</span><span>Tài khoản</span></div><div className="account-layout"><AccountSidebar /><section>{children}</section></div></div>;
}
