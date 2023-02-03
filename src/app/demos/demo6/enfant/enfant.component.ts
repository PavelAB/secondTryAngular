import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent {
  //input info recu du parent
  @Input() prenomPapa:string= "Anonyme";
  @Input() prenomEnfant: string = "John";
  @Input() age:number=0;
  // methodes recu du parent, modifie le parent
  @Output() direBonjour:EventEmitter<string>=new EventEmitter<string>();

  emmettreUnBonjour(age: number){
    // Message envoyer un composante parent
    this.direBonjour.emit(`Bjr Papa, c'est ${this.prenomEnfant}, j'ai ${age} ans`);
  }
}
