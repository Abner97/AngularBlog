import { Injectable } from '@angular/core';
//import { OktaAuthService } from '@okta/okta-angular';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { ThrowStmt } from '@angular/compiler';


export interface singlePost{
  title: string,
  description: string,
}
export interface Posts {
  post_id: number,
  user_id: number,
  title: string,
  description: string,
  publication_date:string,
  publication_modified_at:string
}

const authUrl = 'http://127.0.0.1:8000/oauth/token';
const API_URL: string = 'http://127.0.0.1:8000';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private accessToken:string;
  headers:any;
  options:any;

  constructor(private http: HttpClient) {
   this.init();
}

async init() {
  //this.accessToken = await this.oktaAuth.getAccessToken();
  this.headers =   new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/json'

     });

    //  this.options={
    //    headers:this.headers
    //  };

     this.options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      })
    };

}

// getUSer(){

// }

getPosts(order:string): Observable<Posts[]> {
  try{
    return this.http.get<Posts[]>(`${API_URL}/api/${order}`,{headers:this.headers});
  }catch(erro){
    console.log("Error");
  }

}

getMyPosts(): Observable<Posts[]> {
  try {
    return this.http.get<Posts[]>(API_URL + '/api/myposts',{headers:this.headers});
  } catch (error) {
    console.log(error);
  }

}

createPost(post:singlePost): Observable<singlePost> {
  return this.http.post<singlePost>(API_URL + '/api/posts',{
    title:post.title,
    description:post.description
  },{headers:this.headers});

}

/**
   * Get an access token
   * @param e The email address
   * @param p The password string
   */
  login(e: string, p: string) {
    return this.http.post(authUrl, {
      grant_type: 'password',
      client_id: '2',
      client_secret: 'YAeRMuwpLZ1PygeprdKSw2A96HFuXTAccmkVJcpz',
      username: e,
      password: p,
      scope: ''
    }, this.options);
  }

/**
   * Revoke the authenticated user token
   */
  logout() {
    let options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      })
    };

    console.log(options);
    return this.http.get(API_URL+ '/api/token/revoke', options);
  }

}
