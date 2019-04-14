import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'janhanko-homepage',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit, OnDestroy {
  destroy: Subject<null> = new Subject<null>();
  backgrounds: string[] = [
    'muj-merch.jpg',
    'studio-usp.jpg',
    'urban-sense.jpg',
    'us-academy.jpg',
    'usc-store.jpg',
    'youtube.jpg'
  ];
  background: string;
  clip: any;

  constructor(
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    // this.setBackground(0);

    this.background = `url(assets/images/${this.backgrounds[0]})`;

    interval(10)
      .pipe(
        takeUntil(this.destroy)
      )
      .subscribe((index: number) => this.setBackground(index + 1));
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  private setBackground(index: number): void {
    this.clip = this.domSanitizer.bypassSecurityTrustStyle(`circle(${index % 100}% at 50% 50%)`);

  }

}
