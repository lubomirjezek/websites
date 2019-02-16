import { Component, OnInit } from '@angular/core';

import { NavigationLink } from '../../../../models/navigation-link';

@Component({
  selector: 'janhanko-header',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  navigation: NavigationLink[] = [
    {
      name: 'Homepage',
      url: '',
      highlight: false
    }, {
      name: 'Youtube',
      url: 'youtube',
      highlight: true
    }, {
      name: 'Můj merch',
      url: 'muj-merch',
      highlight: true
    }, {
      name: 'Usc store',
      url: 'usc-store',
      highlight: false
    }, {
      name: 'US academy',
      url: 'us-academy',
      highlight: false
    }, {
      name: 'Urban Sense',
      url: 'urban-sense',
      highlight: false
    }, {
      name: 'Studio usp',
      url: 'studio-usp',
      highlight: false
    }
  ];

  constructor() { }

  ngOnInit() { }

}
