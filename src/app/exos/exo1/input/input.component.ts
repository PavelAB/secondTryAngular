import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() _placeHolder:string;
  _type:string;

  constructor(){
    this._placeHolder="It's alive";
    this._type="Text";
  }



}
