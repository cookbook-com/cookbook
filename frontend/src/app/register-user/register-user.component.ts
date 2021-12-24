import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { RegistrationService } from '../registration.service';
import { EmailValidator } from '@angular/forms';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(
    private regService: RegistrationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submit(): void {
    console.log('new user is successful submitted');

    this.regService.submit(this.newUser).subscribe((res) => {
      console.log(res);
    });
    this.router.navigate(['login']);
  }
}
