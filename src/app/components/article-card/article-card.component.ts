import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IArticles } from 'src/app/model/articles';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
})
export class ArticleCardComponent implements OnInit {
  @Input()
  articolo: IArticles = {
    codart: '',
    descrizione: '',
    um: '',
    pzcart: 0,
    peso: 0,
    prezzo: 0,
    active: true,
    data: new Date(),
    imageUrl: '',
  };

  @Output()
  delete = new EventEmitter();

  @Output()
  edit = new EventEmitter();

  ngOnInit(): void {}

  deleteArt = () => this.delete.emit(this.articolo.codart);
  editArt = () => this.edit.emit(this.articolo.codart);
}
