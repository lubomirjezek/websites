import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'janhanko-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.getArticleImages()
      .subscribe((images: string[]) => this.preload(images));
  }

  private preload(sources: string[]): void {
    sources.forEach(source => {
      const image = new Image();

      image.src = source;
    });
  }

}
