import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  private _placeHolder:string;
  private _type:string;

  constructor(){
    this._placeHolder="It's alive";
    this._type="Text";
  }

  get placeHolder(){
    return this._placeHolder;
  } 

  get type(){
    return this._type;
  }

}
