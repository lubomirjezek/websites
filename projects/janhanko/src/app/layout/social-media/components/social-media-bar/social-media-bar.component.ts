import { Component, OnInit } from '@angular/core';

import { Link } from '../../../../models/link';

@Component({
  selector: 'janhanko-social-media-bar',
  templateUrl: './social-media-bar.component.html',
  styleUrls: ['./social-media-bar.component.scss']
})
export class SocialMediaBarComponent implements OnInit {
  links: Link[] = [
    {
      name: 'fb',
      url: 'https://www.facebook.com/janhankocz/'
    }, {
      name: 'ig',
      url: 'https://www.instagram.com/janhanko/'
    }
  ];

  constructor() { }

  ngOnInit() { }

}
