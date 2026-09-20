import type { Address, Category, Order, Product, Review, Shop } from "@/types";

const image = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;

export const categories: Category[] = [
  { id: "cat-tech", name: "Điện tử", slug: "dien-tu", icon: "⌁", count: 1280 },
  { id: "cat-fashion", name: "Thời trang", slug: "thoi-trang", icon: "◒", count: 3480 },
  { id: "cat-home", name: "Nhà cửa", slug: "nha-cua", icon: "⌂", count: 890 },
  { id: "cat-beauty", name: "Làm đẹp", slug: "lam-dep", icon: "✦", count: 1560 },
  { id: "cat-gaming", name: "Gaming", slug: "gaming", icon: "⌘", count: 460 },
  { id: "cat-accessories", name: "Phụ kiện", slug: "phu-kien", icon: "◌", count: 2670 },
  { id: "cat-sport", name: "Thể thao", slug: "the-thao", icon: "✚", count: 720 },
  { id: "cat-book", name: "Sách & học tập", slug: "sach-hoc-tap", icon: "▤", count: 1190 },
];

export const shops: Shop[] = [
  { id: "shop-1", name: "NOVA TECH", slug: "nova-tech", avatar: image("photo-1593642632823-8f785ba67e45"), cover: image("photo-1518770660439-4636190af475"), rating: 4.9, followers: "12.5k", productCount: 245, verified: true, location: "TP. Hồ Chí Minh" },
  { id: "shop-2", name: "Lumi Living", slug: "lumi-living", avatar: image("photo-1618221195710-dd6b41faaea6"), cover: image("photo-1555041469-a586c61ea9bc"), rating: 4.8, followers: "8.2k", productCount: 182, verified: true, location: "Hà Nội" },
  { id: "shop-3", name: "Mộc Studio", slug: "moc-studio", avatar: image("photo-1525507119028-ed4c629a60a3"), cover: image("photo-1558618666-fcd25c85cd64"), rating: 4.9, followers: "6.7k", productCount: 96, verified: false, location: "Đà Nẵng" },
  { id: "shop-4", name: "Daily Glow", slug: "daily-glow", avatar: image("photo-1596462502278-27bfdc403348"), cover: image("photo-1598440947619-2c35fc9aa908"), rating: 4.7, followers: "4.9k", productCount: 318, verified: true, location: "TP. Hồ Chí Minh" },
];

export const products: Product[] = [
  { id: "p1", slug: "aurora-x-pro-5g", name: "Aurora X Pro 5G", description: "Một trải nghiệm flagship cân bằng giữa hiệu năng mạnh mẽ, camera điện ảnh và thiết kế tinh tế.", shortDescription: "Flagship thế hệ mới, camera Pro và pin bền bỉ.", category: "Điện tử", brand: "Aurora", image: image("photo-1511707171634-5f897ff02aa9"), gallery: [image("photo-1511707171634-5f897ff02aa9"), image("photo-1598327105666-5b89351aff97"), image("photo-1556656793-08538906a9f8")], price: 18990000, originalPrice: 22990000, discountPercentage: 17, stock: 32, rating: 4.9, reviewCount: 328, soldCount: 1200, shop: shops[0], badge: "Flash sale", options: [{ name: "Màu sắc", values: ["Midnight", "Silver", "Ocean"] }, { name: "Dung lượng", values: ["256GB", "512GB"] }], status: "ACTIVE", sku: "AUR-XP-5G", updatedAt: "2026-09-18" },
  { id: "p2", slug: "zenbook-air-14-oled", name: "Zenbook Air 14 OLED", description: "Laptop mỏng nhẹ cho những ngày làm việc linh hoạt với màn hình OLED rực rỡ.", shortDescription: "Mỏng nhẹ 1.2kg · OLED 2.8K · 16GB RAM.", category: "Điện tử", brand: "Zenbook", image: image("photo-1496181133206-80ce9b88a853"), gallery: [image("photo-1496181133206-80ce9b88a853"), image("photo-1517336714731-489689fd1ca8")], price: 24990000, originalPrice: 28990000, discountPercentage: 14, stock: 18, rating: 4.8, reviewCount: 154, soldCount: 680, shop: shops[0], badge: "Bán chạy", options: [{ name: "Màu sắc", values: ["Fog Blue", "Graphite"] }], status: "ACTIVE", sku: "ZEN-A14-OLED", updatedAt: "2026-09-17" },
  { id: "p3", slug: "cloud-knit-cardigan", name: "Cloud Knit Cardigan", description: "Áo cardigan dệt mềm, phom relaxed dễ phối cho những ngày se lạnh.", shortDescription: "Sợi cotton pha · Phom relaxed · 5 màu.", category: "Thời trang", brand: "Mộc Studio", image: image("photo-1434389677669-e08b4cac3105"), gallery: [image("photo-1434389677669-e08b4cac3105"), image("photo-1485968579580-b6d095142e6e")], price: 649000, originalPrice: 890000, discountPercentage: 27, stock: 56, rating: 4.8, reviewCount: 89, soldCount: 430, shop: shops[2], badge: "Mới về", options: [{ name: "Màu sắc", values: ["Oat", "Sage", "Charcoal"] }, { name: "Kích thước", values: ["S", "M", "L", "XL"] }], status: "ACTIVE", sku: "MOC-CARD-01", updatedAt: "2026-09-19" },
  { id: "p4", slug: "arc-wireless-headphones", name: "Arc Wireless Headphones", description: "Âm thanh không gian, chống ồn chủ động và đệm tai êm ái cho cả ngày dài.", shortDescription: "ANC chủ động · 40 giờ pin · Bluetooth 5.4.", category: "Phụ kiện", brand: "Arc", image: image("photo-1505740420928-5e560c06d30e"), gallery: [image("photo-1505740420928-5e560c06d30e"), image("photo-1484704849700-f032a568e944")], price: 2290000, originalPrice: 2990000, discountPercentage: 23, stock: 64, rating: 4.7, reviewCount: 215, soldCount: 980, shop: shops[0], badge: "Flash sale", options: [{ name: "Màu sắc", values: ["Sand", "Black"] }], status: "ACTIVE", sku: "ARC-WH-02", updatedAt: "2026-09-16" },
  { id: "p5", slug: "linen-table-lamp", name: "Linen Table Lamp", description: "Đèn bàn vải linen tạo vùng sáng ấm cho bàn làm việc và góc đọc sách.", shortDescription: "Ánh sáng ấm 2700K · Đế gỗ óc chó.", category: "Nhà cửa", brand: "Lumi Living", image: image("photo-1507473885765-e6ed057f782c"), gallery: [image("photo-1507473885765-e6ed057f782c"), image("photo-1513506003901-1e6a229e2d15")], price: 790000, originalPrice: 990000, discountPercentage: 20, stock: 29, rating: 4.9, reviewCount: 76, soldCount: 210, shop: shops[1], status: "ACTIVE", sku: "LUMI-LAMP-01", updatedAt: "2026-09-14" },
  { id: "p6", slug: "daily-glow-serum", name: "Daily Glow Serum", description: "Serum vitamin C dịu nhẹ cho làn da sáng khỏe và đều màu mỗi ngày.", shortDescription: "10% Vitamin C · Không hương liệu · 30ml.", category: "Làm đẹp", brand: "Daily Glow", image: image("photo-1556228578-8c89e6adf883"), gallery: [image("photo-1556228578-8c89e6adf883"), image("photo-1571781926291-c477ebfd024b")], price: 389000, originalPrice: 490000, discountPercentage: 21, stock: 88, rating: 4.8, reviewCount: 432, soldCount: 2400, shop: shops[3], badge: "Bán chạy", status: "ACTIVE", sku: "DG-SERUM-10", updatedAt: "2026-09-13" },
  { id: "p7", slug: "mechanical-keyboard-75", name: "Mekano 75 Mechanical Keyboard", description: "Bàn phím cơ layout 75% với switch linear mượt, keycap PBT và LED RGB.", shortDescription: "Layout 75% · PBT · Hot-swap · RGB.", category: "Gaming", brand: "Mekano", image: image("photo-1587829741301-dc798b83add3"), gallery: [image("photo-1587829741301-dc798b83add3"), image("photo-1595225476474-87563907a212")], price: 1590000, originalPrice: 1990000, discountPercentage: 20, stock: 41, rating: 4.9, reviewCount: 120, soldCount: 540, shop: shops[0], badge: "Mới về", options: [{ name: "Switch", values: ["Linear", "Tactile"] }], status: "ACTIVE", sku: "MEK-75-RGB", updatedAt: "2026-09-18" },
  { id: "p8", slug: "everyday-canvas-tote", name: "Everyday Canvas Tote", description: "Túi tote canvas dày dặn, ngăn laptop riêng và quai đeo thoải mái.", shortDescription: "Canvas 16oz · Đựng laptop 14 inch.", category: "Thời trang", brand: "Mộc Studio", image: image("photo-1548036328-c9fa89d128fa"), gallery: [image("photo-1548036328-c9fa89d128fa"), image("photo-1594223274512-ad4803739b7c")], price: 420000, originalPrice: 520000, discountPercentage: 19, stock: 72, rating: 4.7, reviewCount: 63, soldCount: 350, shop: shops[2], status: "ACTIVE", sku: "MOC-TOTE-02", updatedAt: "2026-09-12" },
  { id: "p9", slug: "smart-air-purifier-mini", name: "Smart Air Purifier Mini", description: "Máy lọc không khí nhỏ gọn cho phòng ngủ, theo dõi chất lượng không khí trên ứng dụng.", shortDescription: "HEPA H13 · Phòng 25m² · App control.", category: "Nhà cửa", brand: "Lumi Living", image: image("photo-1585771724684-38269d6639fd"), gallery: [image("photo-1585771724684-38269d6639fd"), image("photo-1558618666-fcd25c85cd64")], price: 1790000, originalPrice: 2290000, discountPercentage: 22, stock: 25, rating: 4.6, reviewCount: 46, soldCount: 180, shop: shops[1], status: "ACTIVE", sku: "LUMI-AIR-01", updatedAt: "2026-09-11" },
  { id: "p10", slug: "everyday-running-shoes", name: "Everyday Running Shoes", description: "Giày chạy hằng ngày với đệm responsive và upper thoáng khí.", shortDescription: "Đệm foam nhẹ · Upper thoáng khí.", category: "Thể thao", brand: "Stride", image: image("photo-1542291026-7eec264c27ff"), gallery: [image("photo-1542291026-7eec264c27ff"), image("photo-1600185365483-26d7a4cc7519")], price: 1190000, originalPrice: 1490000, discountPercentage: 20, stock: 38, rating: 4.8, reviewCount: 94, soldCount: 620, shop: shops[2], badge: "Bán chạy", options: [{ name: "Màu sắc", values: ["White", "Black"] }, { name: "Size", values: ["39", "40", "41", "42", "43"] }], status: "ACTIVE", sku: "STR-RUN-01", updatedAt: "2026-09-09" },
  { id: "p11", slug: "minimal-desk-organizer", name: "Minimal Desk Organizer", description: "Khay để bàn modular giúp góc làm việc gọn gàng và có chủ đích hơn.", shortDescription: "Gỗ sồi tự nhiên · Modular 4 ngăn.", category: "Nhà cửa", brand: "Lumi Living", image: image("photo-1494438639946-1ebd1d20bf85"), gallery: [image("photo-1494438639946-1ebd1d20bf85")], price: 530000, originalPrice: 690000, discountPercentage: 23, stock: 44, rating: 4.8, reviewCount: 38, soldCount: 145, shop: shops[1], status: "ACTIVE", sku: "LUMI-DESK-02", updatedAt: "2026-09-08" },
  { id: "p12", slug: "paperback-journal-set", name: "Paperback Journal Set", description: "Bộ sổ ghi chép giấy cream nhẹ mắt, bìa soft-touch và layout chấm bi.", shortDescription: "Giấy 100gsm · Set 3 cuốn · Dot grid.", category: "Sách & học tập", brand: "Field Notes", image: image("photo-1456324504439-367cee3b3c32"), gallery: [image("photo-1456324504439-367cee3b3c32")], price: 259000, originalPrice: 320000, discountPercentage: 19, stock: 120, rating: 4.9, reviewCount: 58, soldCount: 390, shop: shops[2], badge: "Mới về", status: "ACTIVE", sku: "FN-JOURNAL-3", updatedAt: "2026-09-06" },
];

export const reviews: Review[] = [
  { id: "r1", name: "Minh Anh", avatar: "MA", rating: 5, date: "12/09/2026", variant: "Midnight · 256GB", content: "Đóng gói rất chỉn chu, máy đẹp và dùng mượt. Shop phản hồi nhanh, giao hàng sớm hơn dự kiến." },
  { id: "r2", name: "Hoàng Nam", avatar: "HN", rating: 5, date: "09/09/2026", variant: "Silver · 512GB", content: "Màu thực tế đẹp hơn ảnh, camera chụp đêm tốt. Mình đã giới thiệu cho đồng nghiệp." },
  { id: "r3", name: "Thảo Vy", avatar: "TV", rating: 4, date: "03/09/2026", variant: "Ocean · 256GB", content: "Sản phẩm ổn trong tầm giá, chỉ mong có thêm nhiều phụ kiện đi kèm." },
];

export const addresses: Address[] = [
  { id: "a1", name: "Nguyễn Minh Anh", phone: "090 123 4567", line: "42 Nguyễn Huệ, Phường Bến Nghé", city: "Quận 1, TP. Hồ Chí Minh", default: true },
  { id: "a2", name: "Nguyễn Minh Anh", phone: "090 123 4567", line: "18 Trần Phú, Phường Lộc Thọ", city: "Nha Trang, Khánh Hòa" },
];

export const orders: Order[] = [
  { id: "EC-260918-001", shop: shops[0], items: [{ product: products[0], quantity: 1, variation: "Midnight · 256GB" }, { product: products[3], quantity: 1, variation: "Sand" }], status: "Đang giao", total: 21280000, createdAt: "18/09/2026" },
  { id: "EC-260902-014", shop: shops[2], items: [{ product: products[2], quantity: 2, variation: "Oat · M" }], status: "Hoàn thành", total: 1298000, createdAt: "02/09/2026" },
  { id: "EC-260825-009", shop: shops[3], items: [{ product: products[5], quantity: 1 }], status: "Chờ xác nhận", total: 389000, createdAt: "25/08/2026" },
];

export const featuredProducts = products.slice(0, 8);
export const flashSaleProducts = [products[0], products[3], products[5], products[7]];
export const newProducts = [products[2], products[6], products[11], products[9]];
export const bestSellerProducts = [products[0], products[5], products[3], products[9]];
export const recommendedProducts = [products[1], products[4], products[7], products[10]];

const searchAliases: Record<string, string[]> = {
  p1: ["iphone", "iphone 17 pro max", "điện thoại flagship", "smartphone"],
  p2: ["laptop", "laptop văn phòng", "laptop oled", "máy tính"],
  p3: ["áo hoodie", "áo len", "cardigan", "thời trang nữ"],
  p4: ["tai nghe bluetooth", "airpods", "headphone", "tai nghe chống ồn"],
  p7: ["bàn phím cơ", "bàn phím rgb", "gaming keyboard"],
  p10: ["giày chạy", "running shoes", "giày thể thao"],
};

export function searchProducts(query: string) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return products;
  return products.filter((product) => {
    const searchable = [product.name, product.brand, product.category, product.shop.name, ...(searchAliases[product.id] ?? [])].join(" ").toLowerCase();
    return searchable.includes(normalizedQuery);
  });
}

export const searchSuggestions = {
  recent: ["iphone", "tai nghe bluetooth", "áo hoodie"],
  trending: ["laptop gaming", "son lì", "bàn phím cơ"],
};
