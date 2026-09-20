import { orders } from "@/lib/mock-data";
import type { Order } from "@/types";

export const ordersApi = {
  async list(): Promise<Order[]> {
    return orders;
  },
  async getById(id: string): Promise<Order | undefined> {
    return orders.find((order) => order.id === id);
  },
};
