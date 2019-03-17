import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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

  @HostBinding('style.background-image') background: string;

  constructor() { }

  ngOnInit() {
    this.setBackground(0);

    interval(3000)
      .pipe(
        takeUntil(this.destroy)
      )
      .subscribe((index: number) => this.setBackground(index + 1));
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  private setBackground(index: number): void {
    this.background = `url(assets/images/${this.backgrounds[index % this.backgrounds.length]})`;
  }

}
