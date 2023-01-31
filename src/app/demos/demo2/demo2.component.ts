import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component {
  number:number = 0;

  isDisabled:boolean=false;

  randomNumber(){
    this.number = Math.floor(Math.random()*10);
  }
  resetNumber(){
    this.number = 0;
  }
  toggleDisable(){
    this.isDisabled=!this.isDisabled;
  }
  
}
