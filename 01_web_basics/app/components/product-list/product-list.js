import { ProductService } from "../../services/product.service.js";

// Web Component
class ProductListComponent extends HTMLElement {

    /**
     * Produkte vom Server
     */
    products = [];
    #productService = new ProductService();

    constructor() {
        super()
        this.innerHTML = '<h2>Product List</h2>'
    }

    connectedCallback() {
        this.loadProducts();
    }

    loadProducts() {

        this.#productService
            .getAllProducts()
            .then((products) => {
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