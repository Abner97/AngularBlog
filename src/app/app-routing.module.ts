import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { GuestGuardService } from './services/guest-guard.service';
import { AuthGuardService } from './services/auth-guard.service';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate:[GuestGuardService]

  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate:[GuestGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[GuestGuardService]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate:[GuestGuardService]
  },
  {
    path: 'createpost',
    component: CreatePostComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'myposts',
    component: UserPostsComponent,
    canActivate:[AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
