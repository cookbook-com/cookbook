import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../User';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;

  errorMessage!: string;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  onButtonClick() {
    this.loginService.login(this.username, this.password).subscribe(
      (res) => {
        if (res.status === 200) {
          let body = <User>res.body;

          this.router.navigate([WelcomeComponent]); //Should be redirected to the WelcomeComponent
        }
      },
      (err) => {
        this.errorMessage = err.console.error;
      }
    );
  }
}
