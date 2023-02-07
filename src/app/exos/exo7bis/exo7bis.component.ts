import { Component } from '@angular/core';
import { Product } from '../models/product';
import { AllproductService } from '../services/allproduct.service';

@Component({
  selector: 'app-exo7bis',
  templateUrl: './exo7bis.component.html',
  styleUrls: ['./exo7bis.component.scss']
})
export class Exo7bisComponent {
  name:string="";
  price:number=0;
  total:number=0;
  isColor:boolean=false;
  private _basket:AllproductService
  constructor(){
    this._basket=new AllproductService();
  }
  basket:Product[]=[];
  ngOnInit(){
    this.basket=this._basket.basket;
  }
  add(){
    this._basket.addProduct(this.name,this.price);
  }
  addQuantity(name:string){
    this._basket.addQuantity(name);

  }
  removeQuantity(name:string){
    this._basket.removeQuantity(name);

  }
  totalPrice():number
  {
    this.total=this._basket.totalPrice();
    return this.total;

  }
  deleteproduct(name:string)
  {
    this._basket.deleteproduct(name);
  }
  isPromo(name:string)
  {
    return this._basket.isPromo(name)
     
  }
}
