import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsShowComponent } from './pages/posts-show/posts-show.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { PostsCreateComponent } from './pages/posts-create/posts-create.component';
import { PostsLoyoutComponent } from './loyouts/posts-loyout/posts-loyout.component';


@NgModule({
  declarations: [
    PostsShowComponent,
    PostsListComponent,
    PostsCreateComponent,
    PostsLoyoutComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
