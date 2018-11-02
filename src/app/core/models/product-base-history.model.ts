import { ProductBase } from "./product-base.model";
import { User } from "./user.model";

export interface ProductBaseHistory {
    uid?: string;
    productBase: ProductBase;
    status: string;
    createdDate: number;
    creator: User;
}
