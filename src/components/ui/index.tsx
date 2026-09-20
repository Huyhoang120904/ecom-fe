import Link from "next/link";
import { cn } from "@/lib/utils";

export function Button({ className, variant = "primary", size = "md", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" | "outline" | "danger"; size?: "sm" | "md" | "lg" }) {
  return <button className={cn("button", `button-${variant}`, `button-${size}`, className)} {...props} />;
}

export function ButtonLink({ href, className, style, variant = "primary", size = "md", children }: { href: string; className?: string; style?: React.CSSProperties; variant?: "primary" | "secondary" | "ghost" | "outline"; size?: "sm" | "md" | "lg"; children: React.ReactNode }) {
  return <Link href={href} className={cn("button", `button-${variant}`, `button-${size}`, className)} style={style}>{children}</Link>;
}

export function Badge({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "accent" | "success" | "danger" | "warning" }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

export function RatingStars({ rating, count, compact = false }: { rating: number; count?: number; compact?: boolean }) {
  return <span className={cn("rating", compact && "rating-compact")} aria-label={`${rating} trên 5 sao`}><span className="stars">★★★★★</span> <span>{rating.toFixed(1)}</span>{count !== undefined && <span className="muted">({count})</span>}</span>;
}

export function SectionHeading({ eyebrow, title, description, href, action }: { eyebrow?: string; title: string; description?: string; href?: string; action?: string }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{description && <p className="section-description">{description}</p>}</div>{href && <Link href={href} className="text-link">{action ?? "Xem tất cả"} <span>↗</span></Link>}</div>;
}

export function EmptyState({ icon = "◌", title, description, action }: { icon?: string; title: string; description: string; action?: React.ReactNode }) {
  return <div className="empty-state"><div className="empty-icon">{icon}</div><h3>{title}</h3><p>{description}</p>{action}</div>;
}

export function StatusBadge({ status }: { status: string }) {
  const tone = status.includes("Hoàn") || status === "ACTIVE" ? "success" : status.includes("hủy") || status === "OUT_OF_STOCK" ? "danger" : status.includes("giao") || status === "DRAFT" ? "warning" : "neutral";
  return <Badge tone={tone}>{status}</Badge>;
}

export function QuantityInput({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  return <div className="quantity"><button aria-label="Giảm số lượng" onClick={() => onChange(Math.max(1, value - 1))}>−</button><span>{value}</span><button aria-label="Tăng số lượng" onClick={() => onChange(value + 1)}>+</button></div>;
}

export function ProductImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return <div className={cn("product-image", className)} role="img" aria-label={alt} style={{ backgroundImage: `url(${src})` }}><span className="image-shine" /></div>;
}

export function ProductCardSkeleton() {
  return <div className="product-card skeleton-card"><div className="skeleton-block skeleton-image" /><div className="product-card-body"><div className="skeleton-block skeleton-title" /><div className="skeleton-block skeleton-line" /><div className="skeleton-block skeleton-price" /></div></div>;
}
