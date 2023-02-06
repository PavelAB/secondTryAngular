import { Component } from '@angular/core';
import { BookService } from "../sevices/book.service";
import { Book } from "../models/book";

@Component({
  selector: 'app-exo7',
  templateUrl: './exo7.component.html',
  styleUrls: ['./exo7.component.scss']
})
export class Exo7Component {
  title:string="";
  private _test:BookService

  constructor(){
    this._test=new BookService();
  }

  booklist:Book[]=[];

  ngOnInit(){
    this.booklist=this._test.booklist;
  }

  test()
  {
    
    this._test.addBook(this.title);
    
  }
  del(i:number)
  {
    this._test.deleteBook(i);
  }
    
}
