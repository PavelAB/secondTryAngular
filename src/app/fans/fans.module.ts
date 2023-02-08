import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FansRoutingModule } from './fans-routing.module';
import { FansListComponent } from './fans-list/fans-list.component';
import { FansDetailsComponent } from './fans-details/fans-details.component';


@NgModule({
  declarations: [
    FansListComponent,
    FansDetailsComponent
  ],
  imports: [
    CommonModule,
    FansRoutingModule
  ]
})
export class FansModule { }
