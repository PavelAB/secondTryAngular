import { Injectable } from '@angular/core';
import { User } from '../models/user';


@Injectable({
  providedIn: "root"
})
export class LoginService {

  private users:User[]=[
    new User(1,"Santos","Pierre","santosp","1234"),
    new User(2,"Bezuk","Pavel","pbezuk","Test1234"),
    new User(3,"Beurive","Aude","beurivea","5678")

  ]

  connectUser?: User;

  constructor() { }

  login(userLogin:string,userPassword:string){

    // On va verifier si le login est present dans la base de donnees.
    this.connectUser=this.users.find((user) => user.login === userLogin);
    if(this.connectUser)
    {
      //si on l'a trouve, si le password n'est pas ok
      if(this.connectUser.password!==userPassword)
        {this.connectUser=undefined;}
      }
    console.log(this.connectUser);
  }
  logout(){
    this.connectUser=undefined;
  }


}
