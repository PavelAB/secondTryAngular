import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  newId:number=3;

  public booklist:Book[]=[
    new Book("coucou",1),
    new Book("test",2),
    new Book("HarryPotter",3)

  ]

  constructor() { }

  addBook(title:string)
  {
    
    
    this.newId+=1;
    const bookToAdd=new Book(title,this.newId);
    this.booklist.push(bookToAdd);
  }

  deleteBook(id:number)
  {
    const indexBook = this.booklist.findIndex((book) => {
			return book.ID === id;
		});
    this.booklist.splice(indexBook,1);
  }

}
