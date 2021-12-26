import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(
      'http://localhost:8082/login',
      {
        username: username,
        password: password,
      },
      {
        withCredentials: true,
        observe: 'response',
      }
    );
  }

  checkingLoginStatus() {
    return this.http.get('http://localhost:8082/loginstatus', {
      observe: 'response',
      withCredentials: true,
    });
  }

  logout() {
    return this.http.post(
      'http://localhost:8082/logout',
      {},
      {
        observe: 'response',
        withCredentials: true,
        responseType: 'text',
      }
    );
  }
}
