import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  constructor(private http: HttpClient) {}
  user!: User;

  private currentUser = new BehaviorSubject(this.user);
  private curUserObserver = this.currentUser.asObservable();

  //Setting up variable to be observed
  setUser(addedUser: User) {
    this.currentUser.next(addedUser);
  }

  getUserStatic() {
    return this.currentUser.getValue();
  }
  //Subscribing the user object
  getUser() {
    return this.curUserObserver;
  }

  getLoggedUser() {
    return this.http.get('http://localhost:8080/login', {
      withCredentials: true,
      observe: 'response',
    });
  }
}
