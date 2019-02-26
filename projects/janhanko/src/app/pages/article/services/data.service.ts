import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Article } from '../../../models/article';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly ARTICLES: Article[] = [
    {
      id: 'youtube',
      name: 'Youtube',
      text: '',
      link: '',
      image: '../../../../../assets/images/yt.png',
      color: 'secondary'
    }, {
      id: 'muj-merch',
      name: 'Můj merch',
      text: '',
      link: '',
      image: '../../../../../assets/images/merch.png',
      color: 'primary'
    }, {
      id: 'usc-store',
      name: 'Usc store',
      text: '',
      link: '',
      image: '../../../../../assets/images/uss.png',
      color: 'primary'
    }, {
      id: 'us-academy',
      name: 'US academy',
      text: '',
      link: '',
      image: '../../../../../assets/images/usa.png',
      color: 'primary'
    }, {
      id: 'urban-sense',
      name: 'Urban Sense',
      text: '',
      link: '',
      image: '../../../../../assets/images/susp.png',
      color: 'primary'
    }, {
      id: 'studio-usp',
      name: 'Studio usp',
      text: '',
      link: '',
      image: '../../../../../assets/images/susp.png',
      color: 'primary'
    }
  ];

  constructor() { }

  public getArticle(id: string): Observable<Article> {
    return of(this.ARTICLES.find(article => article.id === id));
  }
}
