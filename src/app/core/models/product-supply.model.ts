import { ProductBase } from "./product-base.model";

export interface ProductSupply {
    uid?: string;
    product: ProductBase;
    supplier: string;
    orderDate: number;
    orderId: string;
    estimatedDeliveryDays?: number;
    deliveryDate?: number;
    webShop?: string;
    shippingCost: number;
    price: number
}
