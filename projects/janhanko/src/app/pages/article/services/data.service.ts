import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Article } from '../../../models/article';
import { Product } from '../../../models/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly ARTICLES: Article[] = [
    {
      id: 'youtube',
      name: 'Youtube',
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam facilis neque nesciunt ut. Aliquid animi
  architecto dolores ipsa itaque, minus necessitatibus, nisi officiis pariatur porro quia quos suscipit tenetur. Ab
  aspernatur cumque, delectus dolor dolorem eligendi eum ex iste itaque iusto minus mollitia nobis numquam obcaecati
  odit pariatur perferendis, repellendus reprehenderit tempora, velit. Animi asperiores culpa et nemo placeat reiciendis
  rem, sint temporibus.`,
      raw_link: 'https://www.youtube.com/user/pkhanzi',
      link: 'youtube channel',
      image: '../../../../../assets/images/yt.png',
      color: 'secondary'
    }, {
      id: 'muj-merch',
      name: 'Můj merch',
      text: '',
      raw_link: '',
      link: '',
      image: '../../../../../assets/images/merch.png',
      color: 'primary'
    }, {
      id: 'usc-store',
      name: 'Usc store',
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam facilis neque nesciunt ut. Aliquid animi
  architecto dolores ipsa itaque, minus necessitatibus, nisi officiis pariatur porro quia quos suscipit tenetur. Ab
  aspernatur cumque, delectus dolor dolorem eligendi eum ex iste itaque iusto minus mollitia nobis numquam obcaecati
  odit pariatur perferendis, repellendus reprehenderit tempora, velit. Animi asperiores culpa et nemo placeat reiciendis
  rem, sint temporibus.`,
      raw_link: 'http://usc-store.cz/',
      link: 'usc-store.cz',
      image: '../../../../../assets/images/uss.png',
      color: 'primary'
    }, {
      id: 'us-academy',
      name: 'US academy',
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam facilis neque nesciunt ut. Aliquid animi
  architecto dolores ipsa itaque, minus necessitatibus, nisi officiis pariatur porro quia quos suscipit tenetur. Ab
  aspernatur cumque, delectus dolor dolorem eligendi eum ex iste itaque iusto minus mollitia nobis numquam obcaecati
  odit pariatur perferendis, repellendus reprehenderit tempora, velit. Animi asperiores culpa et nemo placeat reiciendis
  rem, sint temporibus.`,
      raw_link: 'https://www.usacademy.cz',
      link: 'usacademy.cz',
      image: '../../../../../assets/images/usa.png',
      color: 'primary'
    }, {
      id: 'urban-sense',
      name: 'Urban Sense',
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam facilis neque nesciunt ut. Aliquid animi
  architecto dolores ipsa itaque, minus necessitatibus, nisi officiis pariatur porro quia quos suscipit tenetur. Ab
  aspernatur cumque, delectus dolor dolorem eligendi eum ex iste itaque iusto minus mollitia nobis numquam obcaecati
  odit pariatur perferendis, repellendus reprehenderit tempora, velit. Animi asperiores culpa et nemo placeat reiciendis
  rem, sint temporibus.`,
      raw_link: 'http://www.urbansense.cz/',
      link: 'urbansense.cz',
      image: '../../../../../assets/images/susp.png',
      color: 'primary'
    }, {
      id: 'studio-usp',
      name: 'Studio usp',
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam facilis neque nesciunt ut. Aliquid animi
  architecto dolores ipsa itaque, minus necessitatibus, nisi officiis pariatur porro quia quos suscipit tenetur. Ab
  aspernatur cumque, delectus dolor dolorem eligendi eum ex iste itaque iusto minus mollitia nobis numquam obcaecati
  odit pariatur perferendis, repellendus reprehenderit tempora, velit. Animi asperiores culpa et nemo placeat reiciendis
  rem, sint temporibus.`,
      raw_link: '',
      link: '',
      image: '../../../../../assets/images/susp.png',
      color: 'primary'
    }
  ];
  readonly PRODUCTS: Product[] = [
    {
      id: '1',
      name: 'Náramek na ruku',
      images: [],
      price: 350,
      params: [],
      available_params: [
        {
          name: 'Velikost',
          value: 'S'
        }, {
          name: 'Velikost',
          value: 'M'
        }, {
          name: 'Velikost',
          value: 'L'
        }, {
          name: 'Velikost',
          value: 'XL'
        }, {
          name: 'Velikost',
          value: 'XXL'
        }
      ]
    }, {
      id: '1',
      name: 'Náramek na ruku',
      images: [],
      price: 350,
      params: [],
      available_params: [
        {
          name: 'Velikost',
          value: 'S'
        }, {
          name: 'Velikost',
          value: 'M'
        }, {
          name: 'Velikost',
          value: 'L'
        }, {
          name: 'Velikost',
          value: 'XL'
        }, {
          name: 'Velikost',
          value: 'XXL'
        }
      ]
    }
  ];

  constructor() { }

  public getArticle(id: string): Observable<Article> {
    return of(this.ARTICLES.find(article => article.id === id));
  }

  public getProducts(): Observable<Product[]> {
    return of(this.PRODUCTS);
  }

}
