import { Component, OnInit } from '@angular/core';
import { IArticles } from 'src/app/model/articles';
import { ArticoliService } from 'src/services/articoli.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  articles: IArticles[] = [];

  constructor(private articoliService: ArticoliService) {}

  ngOnInit(): void {
    this.articles = this.articoliService.getArticoli();
  }
}
