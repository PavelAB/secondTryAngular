import { Component } from '@angular/core';
import { LinkP } from 'src/app/Types/LinkP';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  links:LinkP[]=[{title:"Home",url:"/"},
  {title:"Demos",children:[
    {title:"Demo 1",url:"demo1"},
    {title:"Demo 2",url:"demo2"},
    {title:"Demo 3",url:"demo3"},
    {title:"Demo 4",url:"demo4"},
    {title:"Demo 5",url:"demo5"},
    {title:"Demo 6",url:"demo6"},
    {title:"Demo 7",url:"demo7"},
    {title:"Demo 8",url:"demo8"}


  ]},
  {title:"Exos",children:[
    {title:"UserInfo/Input",url:"exo1"},
    {title:"Chrono",url:"exo2"},
    {title:"Spoil",url:"exo3"},
    {title:"Menu",url:"exo4"},
    {title:"Accordeon",url:"exo5"},
    {title:"Input/Output",url:"exo6"},
    {title:"ServicesBook",url:"exo7"},
    {title:"Panier",url:"exo7Bis"}



  ]}
]

toggleVisible(index:number){
  this.links[index].isVisible=!this.links[index].isVisible;
}

}

