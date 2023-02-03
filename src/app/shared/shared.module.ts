import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerPipe } from './pipes/timer.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [     
    TimerPipe,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    TimerPipe,
    NavBarComponent
  ]
})
export class SharedModule { }
