import type { Product } from "../../model/product";
import { ProductService } from "../../services/product.service";

// Web Component
class ProductListComponent extends HTMLElement {

    /**
     * Produkte vom Server
     */
    products: Product[] = [];
    //#productService = new ProductService();

    constructor(private productService: ProductService = new ProductService()) {
        super()
        this.innerHTML = '<h2>Product List</h2>'
    }

    connectedCallback() {
        this.loadProducts();
    }

    loadProducts() {

        this.productService
            .getAllProducts()
            .then((products: Product[]) => {
                this.products = products;
                this.render()
            })
    }

    // Gibt es so nicht in Angular
    render() {
        const list = `<ul>
            ${(() => { // IIFE
                // Object deconstructor, arrow-function
                return this.products.map(({ name, price }) => { // Array-Methode
                    return `
                        <li>${name} (${price.toLocaleString(
                        'de-DE',
                        {
                            style: 'currency',
                            currency: 'EUR'
                        }
                    )})</li>
                    `
                }).join('\n') // Array in Zeichenkette umwandlen
            })()}
        </ul>`
        this.innerHTML += list;
    }

}

customElements.define('product-list', ProductListComponent);
// console.log(typeof ProductListComponent);