import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private url: string = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}
}
