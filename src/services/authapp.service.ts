import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthappService {
  constructor() {}

  isAuth = (username: string, pwd: string): boolean => {
    let retVal = username === 'Admin' && pwd === '12345' ? true : false;

    if (retVal) {
      sessionStorage.setItem('Utente', username);
    }

    return retVal;
  };
}
