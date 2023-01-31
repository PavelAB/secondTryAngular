import { Component } from '@angular/core';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent {
  private _age:number;
  private _hobby:string;
  private _pseudo:string;

  constructor(){
    this._age=99;
    this._hobby="cyclisme";
    this._pseudo="IronMan";

  }
  public getInfo(){
    let message=`${this._age} ${this._hobby} ${this._pseudo}`;
    return message;
  }
}

