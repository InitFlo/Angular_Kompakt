import { HttpClient } from "../../lib/http.js";

const url = 'http://localhost:3001/products';

export class ProductService {

    // private field # 
    #http = new HttpClient();

    getAllProducts() {
        return this.#http.get(url);
    }
} 