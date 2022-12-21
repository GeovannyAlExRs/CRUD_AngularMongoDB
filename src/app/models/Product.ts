export class Product {
    _id?: number;
    nameProduct: string;
    categorie: string
    typeProduct: string;
    price: number;

    constructor(nameProduct: string, categorie: string, typeProduct: string, price: number) {
        this.nameProduct = nameProduct;
        this.categorie = categorie;
        this.typeProduct = typeProduct;
        this.price = price;
    }
}