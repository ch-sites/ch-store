export interface ProductBase {
    uid?: string;
    name: string;
    description?: string;
    category: string;
    colors?: Array<string>;
    material?: string;
    manufacturer?: string;
    width?: string;
    height?: string;
    weight?: string;
}
