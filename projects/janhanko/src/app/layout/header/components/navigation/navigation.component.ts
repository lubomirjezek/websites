import { Component, Input, OnInit } from '@angular/core';
import { NavigationLink } from '../../../../models/navigation-link';

@Component({
  selector: 'janhanko-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() navigation: NavigationLink[];

  constructor() { }

  ngOnInit() { }

}
