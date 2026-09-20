import { ProductCardSkeleton } from "@/components/ui";

export default function Loading() { return <div className="container page-section"><div className="skeleton-page-heading"><div className="skeleton-block skeleton-eyebrow" /><div className="skeleton-block skeleton-heading" /></div><div className="product-grid">{Array.from({ length: 4 }, (_, index) => <ProductCardSkeleton key={index} />)}</div></div>; }
