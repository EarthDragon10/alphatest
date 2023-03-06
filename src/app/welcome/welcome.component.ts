import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  user: string = '';

  titolo: string = 'Benvenuto in AlphaShop';
  sottoTitolo: string = 'Visualizzare le offerte del giorno';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.user = this.route.snapshot.params['userId']; // permette di recuperare il valore del params/link
    console.log(this.user);
  }
}
