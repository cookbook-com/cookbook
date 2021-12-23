import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUserService } from '../current.user.service';
import { User } from '../User';
import { LogoutService } from '../logout.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  currentUser: User = {
    id: 0,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    age: 0,
    likedRecipe: '',
  };

<<<<<<< HEAD
  currentUser: User = {
    id: 0,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    age: 0,
    likedRecipe: '',
  };

  public settingUser(newUser: User): void {}

=======
  public settingUser(newUser: User): void {}

>>>>>>> f9d6a518df6efa8114f2e1fd79aa64078380587d
  constructor(
    private router: Router,
    private currentUserService: CurrentUserService,
    private logoutService: LogoutService
  ) {}

  ngOnInit() {
    this.currentUserService.getUser().subscribe();
  }
}
