import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.scss']
})
export class LivreComponent {
  @Input() ID:number=0;
  @Input() BookTitle:string="HarryPotter";
  @Input() index:number=0;


  @Output() deleteBook:EventEmitter<number>=new EventEmitter<number>();

  sendIndex()
  {
    this.deleteBook.emit(this.index);
    
  }

}
