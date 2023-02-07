import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerPipe } from './pipes/timer.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { BasikLayoutComponent } from './basik-layout/basik-layout.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [     
    TimerPipe,
    NavBarComponent,
    BasikLayoutComponent,
    HomeComponent
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
