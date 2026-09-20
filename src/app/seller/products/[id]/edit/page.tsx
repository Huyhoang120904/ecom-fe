import { notFound } from "next/navigation";
import { ProductForm } from "@/components/seller/ProductForm";
import { products } from "@/lib/mock-data";

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; const product = products.find((item) => item.id === id); if (!product) notFound(); return <><div className="seller-titlebar"><div><p className="eyebrow">Sản phẩm · Chỉnh sửa</p><h1>{product.name}</h1><p>Cập nhật thông tin, tồn kho và biến thể sản phẩm.</p></div></div><ProductForm editing initialName={product.name} /></>; }
