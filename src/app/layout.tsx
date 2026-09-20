import type { Metadata } from "next";
import { AppProviders } from "@/components/providers/AppProviders";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "ecome. — Những điều tốt hơn mỗi ngày", template: "%s — ecome." },
  description: "Marketplace chọn lọc cho những sản phẩm bạn yêu thích.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body><AppProviders>{children}</AppProviders></body></html>;
}
