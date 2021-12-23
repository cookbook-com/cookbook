import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  constructor() { }
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
}
