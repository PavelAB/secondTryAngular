import { Injectable } from '@angular/core';
import { Post } from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private _posts:Post[]=[
    new Post(1,"My first Post"),
    new Post(2,"My second Post"),
    new Post(3,"My Third Post")

  ]

  constructor() { }
  getAll(){
    return this._posts;
  }
  getOne(id:number){
    return this._posts.find((post)=>post.id===id);
  }
  
}
