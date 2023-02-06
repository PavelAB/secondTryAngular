import { Component } from '@angular/core';
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
  Books:bookId[]=[{title:"Red",ID:1},{title:"Green",ID:2},{title:"Black",ID:3}];
  
  name:string="";
  idTry:number=3;

  // setId(index:number,id:number){
  //  this.Books[id].ID=id;
  // }
  addBook(book:string){
    
    this.idTry+=1;
    const bookAdd:bookId=({title:book,ID:this.idTry})
    this.Books.push(bookAdd);
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
