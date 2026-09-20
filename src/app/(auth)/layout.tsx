import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div className="auth-page"><aside className="auth-aside"><Link href="/" className="brand"><span className="brand-mark">e</span><span>ecome<span className="brand-dot">.</span></span></Link><div className="auth-aside-copy"><p className="eyebrow">Less noise. More good things.</p><h1>Chọn điều<br /><em>tốt hơn.</em></h1><p>Một marketplace được tạo ra để việc mua sắm trở nên dễ chịu, rõ ràng và có ý nghĩa hơn.</p></div><p className="auth-quote">“Những món đồ tốt là những món đồ ở lại với bạn thật lâu.”</p></aside><main className="auth-form-wrap">{children}</main></div>;
}
