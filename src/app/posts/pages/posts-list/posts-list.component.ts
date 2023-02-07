import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from "../../models/post";


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit{
  posts: Post[]=[];
  constructor (
    private _postsService:PostsService
  ){

  }
  ngOnInit():void{
    this.posts=this._postsService.getAll();
  }
}
