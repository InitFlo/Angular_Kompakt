import { HttpClient } from "../lib/http";
import type { Product } from "../model/product";


const url = 'http://localhost:3001/products';

export class ProductService {

    // private field # 
    #http = new HttpClient();

    getAllProducts(): Promise<Product[]> {
        return this.#http.get<Product[]>(url);
    }
} 