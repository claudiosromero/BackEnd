class ProductManager {

    productos

    constructor() {
        this.productos = []
    };

    getProducts() {
        return this.productos
    };

    getProductsById(id) {
        return this.productos.find((product) => product.id === id);
    };

    todosLosCamposCompletos(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Falta completar campos.");
            return false;

        } else {
            return true;
        };
    };

    codeDuplicado(code) {
        if (this.productos.find((product) => product.code === code) !== undefined) {
            console.error("El codigo ya existe.");
            return false;
        } else {
            return true;
        };
    };

    idIncrementable() {
        let id = 0;
        if (this.productos.length === 0) {
            id = 1;
        } else {
            id = this.productos[this.productos.length - 1].id + 1;
        };
        return id;
    };

    addProduct(title, description, price, thumbnail, code, stock) {

        if (this.todosLosCamposCompletos(title, description, price, thumbnail, code, stock) && this.codeDuplicado(code)) {
            const newProduct = {
                id: this.idIncrementable(),
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock
            }
            this.productos.push(newProduct);
        };
    };
};