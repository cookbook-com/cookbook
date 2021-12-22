import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  private url: string = 'http://localhost:8080/logout';

  constructor(private httpClient: HttpClient, private router: Router) {}
}
