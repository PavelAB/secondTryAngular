import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FansDetailsComponent } from './fans-details/fans-details.component';
import { FansListComponent } from './fans-list/fans-list.component';

const routes: Routes = [
  {path: '',component: FansListComponent, children:[
    {path: ':id', component:FansDetailsComponent}
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FansRoutingModule { }
