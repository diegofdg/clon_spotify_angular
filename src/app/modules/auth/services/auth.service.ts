import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  sendCredentials(email: string, password: string): void {
    console.log('🆗🆗', email, password);
    /* const body = {
      email,
      password
    }
    return this.http.post(`${this.URL}/auth/login`, body) */
  }
}
