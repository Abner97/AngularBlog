import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService, Posts } from '../../services/blog.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  posts:Posts[];
  errorMessage:string;


  //posts:number[];
  constructor(private router:Router,private blogService: BlogService) {
    //this.posts = Array(5).fill(20).map((x,i)=>i);
   }

   createpost(){
    this.router.navigate(['/createpost']);
  }
  ngOnInit(): void {
  }

  getPosts(){
    this.blogService
        .getMyPosts()
        .subscribe(
          posts => this.posts=posts,
          error=>this.errorMessage=<any>error
        );
  }

}
