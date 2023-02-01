import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  sec:number = 0;
  intervale!: ReturnType<typeof setInterval>;
  isDisabled:boolean=true;

  // start(){
  //   this.intervale=setInterval(()=>{
  //     this.sec+=1;
  //   },1000);
  // }
  addOne = () =>{
    this.sec+=1;
  }
  goTimer(){
    this.intervale=setInterval(this.addOne,1000);
    this.isDisabled=false;
  }
  stopTimer(){
    clearInterval(this.intervale);
    this.isDisabled=true;
  }
  resetTimer(){
    this.sec=0;
  }
}
