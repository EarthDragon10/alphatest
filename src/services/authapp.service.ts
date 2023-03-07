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

  loggedUser = (): string | null =>
    sessionStorage.getItem('Utente') ? sessionStorage.getItem('Utente') : '';

  isLogged = (): boolean => (sessionStorage.getItem('Utente') ? true : false);

  clearUser = (): void => sessionStorage.removeItem('Utente');

  clearAll = (): void => sessionStorage.clear();
}
