import { Component, Input, OnInit } from '@angular/core';

import { NavigationLink } from '../../../../models/navigation-link';

@Component({
  selector: 'janhanko-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input() link: NavigationLink;

  constructor() { }

  ngOnInit() { }

}
