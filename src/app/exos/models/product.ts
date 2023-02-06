export class Product {
    name:string;
    quantity:number;
    price:number;
    extraPrice:boolean=false;
    constructor(name:string,quantity:number,price:number){
        this.name=name;
        this.quantity=quantity;
        this.price=price; 

    }

}
