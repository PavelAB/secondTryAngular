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
    let message=`J'ai ${this._age} ans, j'aime ${this._hobby} et je m'appelle ${this._pseudo}`;
    return message;
  }
}

