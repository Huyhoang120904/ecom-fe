import { ButtonLink } from "@/components/ui";

export default function CheckoutSuccessPage() {
  return <div className="container"><div className="success-card"><div className="success-icon">✓</div><p className="eyebrow">Đặt hàng thành công</p><h1>Cảm ơn bạn đã tin chọn ecome.</h1><p>Đơn hàng của bạn đã được ghi nhận. Chúng tôi sẽ gửi cập nhật mới nhất qua email và thông báo tài khoản.</p><span className="success-number">Mã đơn hàng: EC-260920-082</span><div className="success-actions"><ButtonLink href="/account/orders" variant="outline">Theo dõi đơn hàng</ButtonLink><ButtonLink href="/products">Tiếp tục mua sắm</ButtonLink></div></div></div>;
}
