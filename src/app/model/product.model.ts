export class Product{
    id;
    name;
    price;
    qty;
    avaliablity;
    photo;

    constructor(id, name, price, qty, avaliablity, photo){
        this.id = id;
        this.name = name;
        this.price = price;
        this.photo = photo;
        this.avaliablity = avaliablity;
        this.qty = qty;
    }
}
