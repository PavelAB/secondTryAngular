import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './demos/demo1/demo1.component';
import { InputComponent } from './exos/exo1/input/input.component';
import { InfoUserComponent } from './exos/exo1/info-user/info-user.component';
import { Exo1Component } from './exos/exo1/exo1.component';
import { Demo2Component } from './demos/demo2/demo2.component';
import { Demo3Component } from './demos/demo3/demo3.component';
import { ToTemperaturePipe } from './demos/pipes/to-temperature.pipe';
import { TimerComponent } from './exos/exo2/timer/timer.component';
import { TimerPipe } from './exos/pipes/timer.pipe';
import { Demo4Component } from './demos/demo4/demo4.component';
import { Demo5Component } from './demos/demo5/demo5.component';
import { FormsModule } from '@angular/forms';
import { Exo3Component } from './exos/exo3/exo3.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    InputComponent,
    InfoUserComponent,
    Exo1Component,
    Demo2Component,
    Demo3Component,
    ToTemperaturePipe,
    TimerComponent,
    TimerPipe,
    Demo4Component,
    Demo5Component,
    Exo3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
