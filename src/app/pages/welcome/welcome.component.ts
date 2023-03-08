import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalutiDataService } from 'src/services/data/saluti-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  user: string = '';

  titolo: string = 'Benvenuto in AlphaShop';
  sottoTitolo: string = 'Visualizzare le offerte del giorno';

  constructor(
    private route: ActivatedRoute,
    private salutiSrv: SalutiDataService
  ) {}

  ngOnInit(): void {
    this.user = this.route.snapshot.params['userId']; // permette di recuperare il valore del params/link
  }

  saluti: string = '';
  errore: string = '';

  // getSaluti = (): void => {
  //   this.salutiSrv
  //     .getSaluti(this.user)
  //     .subscribe((response) => this.handleResponse(response));
  // };

  getSaluti = (): void => {
    this.salutiSrv.getSaluti(this.user).subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this),
    });
  };

  handleError(error: any) {
    console.log(error);
    this.errore = error.error.message;
  }

  handleResponse(response: Object) {
    this.saluti = response.toString();
  }
}
