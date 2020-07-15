import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from '../post-card/post-card.component';
import { BlogService, Posts } from '../../services/blog.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

 // posts:number[];
  posts:Posts[];
  errorMessage:string;
  constructor(private blogService: BlogService) {
    //this.posts = Array(20).fill(20).map((x,i)=>i);
this.getPosts('posts');

  }

  async getPosts(order:string){
    await this.blogService
        .getPosts(order)
        .subscribe(
          posts => this.posts=posts,
          error=>this.errorMessage=<any>error,
          ()=>console.log(this.posts)
        );


  }




  ngOnInit(): void {

  }

}
