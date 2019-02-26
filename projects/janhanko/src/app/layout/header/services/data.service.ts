import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { NavigationLink } from '../../../models/navigation-link';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly NAVIGATION: NavigationLink[] = [
    {
      name: 'Homepage',
      url: '',
      highlight: false
    }, {
      name: 'Youtube',
      url: '/youtube',
      highlight: true
    }, {
      name: 'Můj merch',
      url: '/muj-merch',
      highlight: true
    }, {
      name: 'Usc store',
      url: '/usc-store',
      highlight: false
    }, {
      name: 'US academy',
      url: '/us-academy',
      highlight: false
    }, {
      name: 'Urban Sense',
      url: '/urban-sense',
      highlight: false
    }, {
      name: 'Studio usp',
      url: '/studio-usp',
      highlight: false
    }
  ];

  constructor() { }

  public getNavigation(): Observable<NavigationLink[]> {
    return of(this.NAVIGATION);
  }
}
