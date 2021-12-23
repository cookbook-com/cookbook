import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
<<<<<<< HEAD

@Injectable({
  providedIn: 'root'
=======
import { CurrentUserService } from './current.user.service';

@Injectable({
  providedIn: 'root',
>>>>>>> f9d6a518df6efa8114f2e1fd79aa64078380587d
})
export class LogoutService {
  private url: string = 'http://localhost:8080/logout';

<<<<<<< HEAD
  constructor(private httpClient: HttpClient, private router: Router) {}
=======
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private currentUser: CurrentUserService
  ) {}

  logOut() {
    console.log('You are logged out');
    //NOT YET FINISHED - KIND STACK IN HERE
  }
>>>>>>> f9d6a518df6efa8114f2e1fd79aa64078380587d
}
