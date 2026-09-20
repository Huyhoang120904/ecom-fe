"use client";

import { Button } from "@/components/ui";

export default function ProfilePage() {
  return <div className="account-card"><h2>Hồ sơ của tôi</h2><p className="muted">Quản lý thông tin cá nhân để trải nghiệm mua sắm tốt hơn.</p><div className="profile-head"><div className="profile-photo">MA</div><div><h3>Ảnh đại diện</h3><p>JPG, PNG hoặc GIF · Tối đa 2MB</p></div><Button variant="outline" size="sm" style={{ marginLeft: "auto" }}>Thay đổi ảnh</Button></div><form className="profile-form" onSubmit={(event) => event.preventDefault()}><div className="checkout-form-grid"><div className="form-field"><label htmlFor="name">Họ và tên</label><input id="name" defaultValue="Nguyễn Minh Anh" /></div><div className="form-field"><label htmlFor="email">Email</label><input id="email" type="email" defaultValue="minhanh@email.com" /></div><div className="form-field"><label htmlFor="phone">Số điện thoại</label><input id="phone" defaultValue="090 123 4567" /></div><div className="form-field"><label htmlFor="gender">Giới tính</label><select id="gender" defaultValue="female"><option value="female">Nữ</option><option value="male">Nam</option><option value="other">Khác</option></select></div><div className="form-field"><label htmlFor="birthday">Ngày sinh</label><input id="birthday" defaultValue="12/08/2000" /></div></div><div><Button>Lưu thay đổi</Button></div></form></div>;
}
