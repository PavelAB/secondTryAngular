import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsCreateComponent } from './pages/posts-create/posts-create.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { PostsShowComponent } from './pages/posts-show/posts-show.component';

const routes: Routes = [
  {path: '',component: PostsListComponent, children:[
  {path: 'create',component: PostsCreateComponent}, //  /posts/create
]},
  {path: ':id', component:PostsShowComponent}       //  /posts/42
  // {path:'**', component:NotFoundComponent}       // page not found, il faut cree le component not found

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
