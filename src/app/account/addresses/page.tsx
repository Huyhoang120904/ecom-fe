import { Button, Badge } from "@/components/ui";
import { addresses } from "@/lib/mock-data";

export default function AddressesPage() {
  return <div className="account-card"><div className="section-heading"><div><h2>Địa chỉ của tôi</h2><p className="muted">Quản lý địa chỉ giao hàng của bạn.</p></div><Button>+ Thêm địa chỉ</Button></div>{addresses.map((address) => <div className="address-card" key={address.id}><div><h3>{address.name} <span className="muted">· {address.phone}</span>{address.default && <span className="address-badge">Mặc định</span>}</h3><p>{address.line}</p><p>{address.city}</p></div><div style={{ display: "flex", gap: 5, alignItems: "start" }}><Button variant="ghost" size="sm">Sửa</Button><Button variant="ghost" size="sm">Xóa</Button></div></div>)}<div className="empty-state" style={{ marginTop: 20, padding: 22 }}><Badge tone="accent">Gợi ý</Badge><p style={{ margin: "8px 0 0" }}>Bạn có thể thêm địa chỉ nhà, nơi làm việc hoặc địa chỉ nhận hàng thường dùng.</p></div></div>;
}
