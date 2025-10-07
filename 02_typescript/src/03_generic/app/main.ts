function getData<T>(url: string): Promise<T> {

    return fetch(url)
        .then((response) => {
            return response.json();
        })
}

interface Product {
    id: number;
    title: string;
    price: number;
}

interface User {
    id: number;
    name: string;
    role: string;
}

getData<Product>('product.json')
    .then((products) => {
        console.log(products);
    })

getData<User>('user.json')
    .then((user) => {
        console.log(user);
    })