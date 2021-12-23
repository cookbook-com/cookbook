import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient, HttpHeaders  } from '@angular/common/http';
=======
import { HttpClient, HttpHeaders } from '@angular/common/http';
>>>>>>> f9d6a518df6efa8114f2e1fd79aa64078380587d
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private url: string = 'http://localhost:8080/users';

  constructor(private httpClient: HttpClient) {}

  submit(newUser: User) {
<<<<<<< HEAD
=======
    console.log(newUser);
>>>>>>> f9d6a518df6efa8114f2e1fd79aa64078380587d
    const requestBody = {
      username: newUser.username,
      password: newUser.password,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      phoneNumber: newUser.phoneNumber,
      email: newUser.email,
      age: newUser.age,
      likedRecipes: newUser.likedRecipe,
    };
    const header = {
      headers: new HttpHeaders({
        ContentType: 'application/json',
        responseType: 'text',
        observe: 'response',
      }),
    };
    return this.httpClient.post(this.url, requestBody, header);
  }
}
