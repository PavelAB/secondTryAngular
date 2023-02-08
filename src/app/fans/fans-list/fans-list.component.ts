import { Component, EventEmitter } from '@angular/core';
import { FanService } from '../services/fan.service';
import { Fan } from "../models/fan";

@Component({
  selector: 'app-fans-list',
  templateUrl: './fans-list.component.html',
  styleUrls: ['./fans-list.component.scss']
})
export class FansListComponent {
  ChoiceFan = new EventEmitter<Fan>();


  constructor(
    private $listFan:FanService
  ){}

  get ListFan():Fan[]{
    return this.$listFan.ListFan
  }
  get Fanp():any{
    return this.ListFan
  }

  ChoiceThisFan(Fan:Fan){
    this.ChoiceFan.emit(Fan);
  }


}
