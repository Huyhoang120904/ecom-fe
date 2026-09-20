export type ProductStatus = "ACTIVE" | "DRAFT" | "OUT_OF_STOCK" | "HIDDEN";

export type Category = {
  id: string;
  name: string;
  slug: string;
  icon: string;
  count: number;
};

export type Shop = {
  id: string;
  name: string;
  slug: string;
  avatar: string;
  cover: string;
  rating: number;
  followers: string;
  productCount: number;
  verified: boolean;
  location: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  category: string;
  brand: string;
  image: string;
  gallery: string[];
  price: number;
  originalPrice: number;
  discountPercentage: number;
  stock: number;
  rating: number;
  reviewCount: number;
  soldCount: number;
  shop: Shop;
  badge?: "Flash sale" | "Mới về" | "Bán chạy";
  options?: { name: string; values: string[] }[];
  status: ProductStatus;
  sku: string;
  updatedAt: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
  variation?: string;
};

export type Address = {
  id: string;
  name: string;
  phone: string;
  line: string;
  city: string;
  default?: boolean;
};

export type OrderStatus = "Chờ xác nhận" | "Đang chuẩn bị" | "Đang giao" | "Hoàn thành" | "Đã hủy";

export type Order = {
  id: string;
  shop: Shop;
  items: CartItem[];
  status: OrderStatus;
  total: number;
  createdAt: string;
};

export type Review = {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  variant: string;
  content: string;
};
