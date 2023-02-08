import { Injectable } from '@angular/core';
import { Fan } from "../models/fan";

@Injectable({
  providedIn: 'root'
})
export class FanService {
  private listFan:Fan[]=[
    new Fan("Pavel",new Date(1996,1,22),["coucou"]),
    new Fan("Francou",new Date(1997,0,2),["test"]),
    new Fan("Loic",new Date(2000,5,7),["RCHP"])


  ];
  //getter
  get ListFan():Fan[]{
    return this.listFan;
  }

  constructor( ) { }
}
