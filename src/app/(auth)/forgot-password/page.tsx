"use client";

import Link from "next/link";
import { Button } from "@/components/ui";

export default function ForgotPasswordPage() { return <><Link href="/" className="brand" style={{ marginBottom: 35 }}><span className="brand-mark">e</span><span>ecome<span className="brand-dot">.</span></span></Link><p className="eyebrow">Khôi phục tài khoản</p><h1>Quên mật khẩu?</h1><p>Nhập email đã đăng ký, chúng tôi sẽ gửi hướng dẫn đặt lại mật khẩu cho bạn.</p><form className="auth-form" onSubmit={(event) => event.preventDefault()}><div className="form-field"><label htmlFor="email">Email</label><input id="email" type="email" placeholder="you@email.com" required /></div><Button size="lg">Gửi hướng dẫn <span>→</span></Button></form><p className="auth-bottom"><Link href="/login">← Quay lại đăng nhập</Link></p></>; }
