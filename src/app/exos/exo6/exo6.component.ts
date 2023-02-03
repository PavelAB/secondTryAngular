import { Component,Input } from '@angular/core';
export type bookId ={
  title:string;
  ID:number;
}
@Component({
  selector: 'app-exo6',
  templateUrl: './exo6.component.html',
  styleUrls: ['./exo6.component.scss']
})
export class Exo6Component {
  Books:string[]=["Red","Green"];
  bookToDelete:number=0;
  name:string="";
  idExist:boolean=false;
  idTry:number=0;

  

  addBook(title:string)
  {
    this.Books.push(title);
  }
  deleteBookOK(event:number)
  {
    this.Books.splice(event,1);
  }

}
