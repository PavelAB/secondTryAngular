import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from "../../models/post";


@Component({
  selector: 'app-posts-show',
  templateUrl: './posts-show.component.html',
  styleUrls: ['./posts-show.component.scss']
})
export class PostsShowComponent implements OnInit{
  post ?:Post
  constructor(
    private _postsService:PostsService,
    private _activatedRoute:ActivatedRoute
  ){}

ngOnInit(): void {
  const id= this._activatedRoute.snapshot.params['id'];
  //Params URL toujours au format STRING!!!
  this.post=this._postsService.getOne(parseInt(id));
  // pas utiliser, mais ca marche
  // this.post=this._postsService.getOne(+id);


}

}
