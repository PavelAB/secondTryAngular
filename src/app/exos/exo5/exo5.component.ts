import { Component } from '@angular/core';
import { Link } from '../models/link';

@Component({
  selector: 'app-exo5',
  templateUrl: './exo5.component.html',
  styleUrls: ['./exo5.component.scss']
})
export class Exo5Component {
  tableLink:Link[]=[{name:"HTML",
  message:"Mettre en page des sites web",
  active:false},
  {name:"CSS",
  message:"Les rendre plus ou moins beaux",
  active:false},
  {name:"JavaScript",
  message:"Les rendre dynamiques",
  active:false},
  {name:"C#",
  message:"Un super langage orienté objet",
  active:false}];
  isOpen:boolean=true;

  // addInTableLink(link:Link){
  //   this.tableLink.push(link)
  // }
  isActive(cours:Link)
  {
    for (const i of this.tableLink) {
      i.active = false
    }
    cours.active=true;
  }


}
