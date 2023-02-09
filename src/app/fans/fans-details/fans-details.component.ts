import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fan } from '../models/fan';
import { FanService } from '../services/fan.service';

@Component({
  selector: 'app-fans-details',
  templateUrl: './fans-details.component.html',
  styleUrls: ['./fans-details.component.scss']
})
export class FansDetailsComponent implements OnInit{

  private thatFan?:Fan;
  public id?:number;
  //public name:string;
  constructor(
    private _route:ActivatedRoute,
    private $listFan:FanService
  ){}
  ngOnInit(): void {
    this.id=this._route.snapshot.params['id'];
    
  }
  get ListFan():Fan[]{
    return this.$listFan.ListFan
   }
  // set thatFan(id:number):Fan{
  //   const fan = this.ListFan.find((f)=>{return f.id===this.id});
  //   // this.thatFan=this.ListFan[];
  // }
  
}
