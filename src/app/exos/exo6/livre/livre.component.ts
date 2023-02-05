import { Component, Input, Output, EventEmitter } from '@angular/core';
import { bookId } from '../exo6.component';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.scss']
})
export class LivreComponent {
  @Input() ID:number=0;
  @Input() BookTitle:string="HarryPotter";
  @Input() index:number=0;


  @Output() deleteBook=new EventEmitter<number>();
  //@Output() setID=new EventEmitter<bookId>();

  // setIDparent(){
  //   this.setID.emit(this.index);
  // }

  sendIndex()
  {
    this.deleteBook.emit(this.index);
  }
}
