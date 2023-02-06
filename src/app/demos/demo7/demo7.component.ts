import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from "../models/user";

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component implements OnInit{
  
  connectedUser?: User;

  login:string="";
  password:string="";

  constructor(
    private _loginService:LoginService
  ){}

  ngOnInit(){
    this.connectedUser=this._loginService.connectUser;
  }

  connection():void{
    //Si la personne n'a rien tape dans login, on n'appelle pas le service pour rien
    if(this.login.trim()){
      //undefined ou User connecte
      this._loginService.login(this.login,this.password);
      //Mettre a jour le visuel avec le service
      this.connectedUser=this._loginService.connectUser;
      if(this.connectedUser) //reset les infos des inputs
      {
        this.login="";
        this.password="";

      }
    }
    
  }
  deconnection():void{
    this._loginService.logout();
    this.connectedUser=this._loginService.connectUser;

  }
}
