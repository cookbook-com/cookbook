import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { RegistrationService } from '../registration.service';
import { EmailValidator } from '@angular/forms';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  newUser: User = {
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

  constructor(private regService: RegistrationService) {}

  ngOnInit(): void {}

  submit(): void {
    console.log('new user is successful submitted');
    this.newUser.username;
    this.newUser.password;
    this.newUser.firstName;
    this.newUser.lastName;
    this.newUser.phoneNumber;
    this.newUser.email;
    this.newUser.age;
    this.newUser.likedRecipe;

    
    console.log(this.regService.submit(this.newUser));
  }
}
