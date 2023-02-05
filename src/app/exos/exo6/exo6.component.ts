import { Component } from '@angular/core';
export type bookId ={
  title:string;
  ID?:number;
  isId?:boolean;
}
@Component({
  selector: 'app-exo6',
  templateUrl: './exo6.component.html',
  styleUrls: ['./exo6.component.scss']
})
export class Exo6Component {
  Books:bookId[]=[{title:"Red"},{title:"Green"},{title:"Black"}];
  name:string="";
  idTry:number=0;

  // setId(index:number,id:number){
  //  this.Books[id].ID=id;
  // }
 //envoyer tout dans un string!!!
  addBook(book:bookId){
    this.Books.push(book);
  }
  deleteBookOK(event:number){
    this.Books.splice(event,1);
  }
  // setId(){
  //   for (let book of this.Books) {
  //     book.ID=this.idTry;
  //     this.idTry+=1;
  //   }
  // }

}
