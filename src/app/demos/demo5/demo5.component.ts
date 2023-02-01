import { Component } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component {
  isOpen:boolean=false;
  choice:number=1;

  fruits:string[]=['Pomme','Poire', 'Peche'];
  fruitName:string="";

  addFruit(){
    this.fruits.push(this.fruitName);
    this.fruitName="";
  
  // for (const fruit of this.fruits) {
    
  // }
 //https://exo-angular.vercel.app/exo5
  }

}
