import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  sec:number = 0;
  intervale:any;
  isDisabled:boolean=true;

  addOne = () =>{
    this.sec+=1;
  }
  goTimer(){
    this.intervale=setInterval(this.addOne,1000);
    this.isDisabled=false;
  }
  stopTimer(){
    clearInterval(this.intervale);
    this.isDisabled;
  }
  resetTimer(){
    this.sec=0;
  }
}
