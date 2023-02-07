import { Injectable } from '@angular/core';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class AllproductService {

  public basket:Product[]=[];
  constructor() { }

  addProduct(name:string,cost:number){
    const newProduct=new Product(name,1,cost);
    this.basket.push(newProduct);
  }
  addQuantity(name:string)
  {
    const index = this.basket.findIndex((prod) => {
			return prod.name === name;
		});
    this.basket[index].quantity+=1;
  }
  removeQuantity(name:string)
  {
    const index = this.basket.findIndex((prod) => {
			return prod.name === name;
		});

    if(this.basket[index].quantity>=1)
      this.basket[index].quantity-=1;
  }
  totalPrice()
  {
    const total = this.basket.reduce((total, product) => {
				total += (product.price*product.quantity);
      return total;
		}, 0);
    
    return total;
  }

  deleteproduct(name:string)
  {
    const index = this.basket.findIndex((product) => {
			return product.name === name;
		});
    this.basket.splice(index,1);
  }
  isPromo(name:string){
    const index = this.basket.findIndex((product) => {
			return product.name === name;
		});
    this.basket[index].extraPrice=!this.basket[index].extraPrice;
    return this.basket[index].extraPrice;
  }

}
