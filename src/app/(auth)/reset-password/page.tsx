"use client";

import Link from "next/link";
import { Button } from "@/components/ui";

export default function ResetPasswordPage() { return <><Link href="/" className="brand" style={{ marginBottom: 35 }}><span className="brand-mark">e</span><span>ecome<span className="brand-dot">.</span></span></Link><p className="eyebrow">Mật khẩu mới</p><h1>Đặt lại mật khẩu</h1><p>Tạo một mật khẩu mới để bảo vệ tài khoản của bạn.</p><form className="auth-form" onSubmit={(event) => event.preventDefault()}><div className="form-field"><label htmlFor="password">Mật khẩu mới</label><input id="password" type="password" minLength={8} required placeholder="Tối thiểu 8 ký tự" /></div><div className="form-field"><label htmlFor="confirm">Nhập lại mật khẩu</label><input id="confirm" type="password" minLength={8} required placeholder="Nhập lại mật khẩu" /></div><Button size="lg">Cập nhật mật khẩu</Button></form><p className="auth-bottom"><Link href="/login">← Quay lại đăng nhập</Link></p></>; }
