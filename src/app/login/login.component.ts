import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private route: Router) {}

  usernameUser: string = '';
  userId: number = 1;
  pwdUser: string = '';
  errMsg: string = 'Spiacente, la username e/o la paswword sono errati!';
  successMsg: string = 'Accesso Consentito';

  authenticated: boolean = true;
  successLogin: boolean = false;

  // Jumbotron
  titolo: string = 'Accesso & Autenticazione';
  sottoTitolo: string = 'Procedi ad Inserire la username e la password';

  ngOnInit(): void {}

  getsAuth(): void {
    console.log(this.usernameUser);

    if (this.usernameUser == 'Admin' && this.pwdUser == '12345') {
      this.authenticated = true;
      this.successLogin = true;
      this.route.navigate(['welcome', this.userId]);
    } else {
      this.authenticated = false;
      this.successLogin = false;
    }
  }
}
