import Link from "next/link";
import { ButtonLink } from "@/components/ui";

export default function NotFound() { return <div className="container"><div className="success-card"><p className="eyebrow">404 · Không tìm thấy</p><h1>Trang này đang đi đâu đó.</h1><p>Có thể đường dẫn đã thay đổi hoặc sản phẩm không còn tồn tại.</p><ButtonLink href="/">Về trang chủ</ButtonLink><Link href="/products" className="text-link" style={{ display: "block", marginTop: 16 }}>Khám phá sản phẩm →</Link></div></div>; }
