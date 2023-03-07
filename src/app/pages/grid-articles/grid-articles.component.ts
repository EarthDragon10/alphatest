import { Component, OnInit } from '@angular/core';
import { IArticles } from 'src/app/model/articles';
import { ArticoliService } from 'src/services/articoli.service';

@Component({
  selector: 'app-grid-articles',
  templateUrl: './grid-articles.component.html',
  styleUrls: ['./grid-articles.component.css'],
})
export class GridArticlesComponent implements OnInit {
  articoliArr: IArticles[] = [];

  constructor(private articoliService: ArticoliService) {}

  ngOnInit(): void {
    this.articoliArr = this.articoliService.getArticoli();
    console.log(this.articoliArr);
  }

  handleEdit = (codArt: string) => {
    console.log('Cliccato tasto modifica del prodotto: ' + codArt);
  };

  handleDelete = (codArt: string) => {
    console.log('Cliccato tasto elimina del prodotto: ' + codArt);

    this.articoliArr.splice(
      this.articoliArr.findIndex((x) => x.codart === codArt),
      1
    );
  };
}
