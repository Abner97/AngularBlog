import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { AuthGuard } from '../guards/auth.guard';
import { AuthGuardService } from '../../services/auth-guard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn:boolean;
  constructor(private router: Router,private blogService:BlogService,private AuthGuard:AuthGuardService) {
    this.loggedIn=this.isLoggedIn();
   }

  createpost(){
    this.router.navigate(['/createpost']);
  }



  logout(): void {
    //this.loading = true;
    this.blogService.logout()
      .subscribe(() => {
        //this.loading = false;
        localStorage.removeItem('access_token');
        this.router.navigate(['/login']);
      });
  }

  isLoggedIn(){
    let state = this.AuthGuard.loggedIn();
    console.log("STATE "+state);
    return state;
    //return true;
  }
  ngOnInit(): void {
  }

}
