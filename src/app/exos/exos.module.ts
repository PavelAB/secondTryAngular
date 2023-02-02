import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';
import { Exo1Component } from './exo1/exo1.component';
import { Exo3Component } from './exo3/exo3.component';
import { TimerComponent } from './exo2/timer/timer.component';
import { Exo4Component } from './exo4/exo4.component';
import { Exo5Component } from './exo5/exo5.component';
import { TimerPipe } from './pipes/timer.pipe';


@NgModule({
  declarations: [Exo1Component,
  Exo3Component,
  TimerComponent,
  Exo4Component,
  Exo5Component,
  TimerPipe],
  imports: [
    CommonModule,
    ExosRoutingModule
  ]
})
export class ExosModule { }
