import { Injectable } from '@angular/core';
import { Fan } from "../models/fan";

@Injectable({
  providedIn: 'root'
})
export class FanService {
  private listFan:Fan[]=[
    new Fan(1,"Pavel",new Date(1996,1,22),["coucou"]),
    new Fan(2,"Francou",new Date(1997,0,2),["test"]),
    new Fan(3,"Loic",new Date(2000,5,7),["RCHP"])


  ];//CRUD!!!!!!!!!! 
  //getter
  get ListFan():Fan[]{
    return this.listFan;
  }

  constructor( ) { }
}
