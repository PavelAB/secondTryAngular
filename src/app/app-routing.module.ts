import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasikLayoutComponent } from './shared/basik-layout/basik-layout.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:HomeComponent},
  {path: 'redirect',redirectTo:'/posts'},
  {path:'exos',
  loadChildren:()=> import('./exos/exos.module').then(m=>m.ExosModule)},
  {path:'demos',
  loadChildren:()=> import('./demos/demos.module').then(m=>m.DemosModule)},
  // {path:'posts',
  //  component: BasikLayoutComponent,
  // loadChildren:()=> import('./posts/posts.module').then(m=>m.PostsModule)},
  {path:'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)},
  
  {path:'fans', loadChildren: () => import('./fans/fans.module').then(m => m.FansModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
