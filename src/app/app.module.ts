import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './exos/exo1/input/input.component';
import { InfoUserComponent } from './exos/exo1/info-user/info-user.component';
import { DemosModule } from './demos/demos.module';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    InfoUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
