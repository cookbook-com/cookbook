import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './User';

@Injectable({
<<<<<<< HEAD
  providedIn: 'root'
})
export class CurrentUserService {

  constructor() { }
=======
  providedIn: 'root',
})
export class CurrentUserService {
  constructor() {}
>>>>>>> f9d6a518df6efa8114f2e1fd79aa64078380587d
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
