import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'alphaShop';
  saluti: string = 'Benvenuti in AlphaShop';
  bollini: number = 1500;
}
