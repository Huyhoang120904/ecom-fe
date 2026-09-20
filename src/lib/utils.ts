export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

import { products } from "@/lib/mock-data";

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug) ?? products[0];
}
