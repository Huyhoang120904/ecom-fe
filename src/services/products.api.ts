import { products } from "@/lib/mock-data";
import type { Product } from "@/types";

export const productsApi = {
  async list(): Promise<Product[]> {
    return products;
  },
  async getBySlug(slug: string): Promise<Product | undefined> {
    return products.find((product) => product.slug === slug);
  },
};
