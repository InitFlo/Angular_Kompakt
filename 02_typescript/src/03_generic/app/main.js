function getData(url) {
    return fetch(url)
        .then((response) => {
        return response.json();
    });
}
getData('product.json')
    .then((products) => {
    console.log(products);
});
getData('user.json')
    .then((user) => {
    console.log(user);
});
export {};
//# sourceMappingURL=main.js.map