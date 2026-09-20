import { MobileNav } from "@/components/layout/MobileNav";
import { StoreFooter } from "@/components/layout/StoreFooter";
import { StoreHeader } from "@/components/layout/StoreHeader";

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return <><StoreHeader /><main>{children}</main><StoreFooter /><MobileNav /></>;
}
