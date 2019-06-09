import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, interval, Subject } from 'rxjs';
import { filter, map, takeUntil, tap, throttleTime } from 'rxjs/operators';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { HomepageSlide } from '../../../../models/homepage-slide';

@Component({
  selector: 'janhanko-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {
  readonly STEP_SIZE = 10;

  destroy: Subject<null> = new Subject<null>();
  slides: HomepageSlide[] = [
    {
      title: 'Youtube',
      background: 'youtube.jpg'
    }, {
      title: 'Můj merch',
      background: 'muj-merch.jpg'
    }, {
      title: 'USCstore',
      background: 'usc-store.jpg'
    }, {
      title: 'US Academy',
      background: 'us-academy.jpg'
    }, {
      title: 'Urbansense',
      background: 'urban-sense.jpg'
    }, {
      title: 'Studio USP',
      background: 'studio-usp.jpg'
    }
  ];

  clip = 0;

  currIndex = 0;
  nextIndex = 1;
  currBackgroundStyle;
  nextBackgroundStyle;
  clipStyle;


  constructor(
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.updateStyles();

    fromEvent(window, 'wheel')
      .pipe(
        throttleTime(30),
        map((event: WheelEvent) => event.deltaY > 0)
      )
      .subscribe((direction: boolean) => {
        if (direction) {
          this.clipUp();
        } else {
          this.clipDown();
        }

        if (this.clip === 0 && direction) {
          this.nextSlide();
        }

        if (this.clip === 90 && !direction) {
          this.prevSlide();
        }

        this.updateStyles();
      });
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  private clipUp(): void {
    this.clip = this.clip + this.STEP_SIZE;

    if (this.clip >= 100) {
      this.clip = 0;
    }
  }

  private clipDown(): void {
    this.clip = this.clip - this.STEP_SIZE;

    if (this.clip < 0) {
      this.clip = 90;
    }
  }

  private nextSlide(): void {
    this.currIndex++;
    this.nextIndex++;

    if (this.nextIndex >= this.slides.length) {
      this.currIndex = 0;
      this.nextIndex = 1;
    }
  }

  private prevSlide(): void {
    this.currIndex--;
    this.nextIndex--;

    if (this.currIndex < 0) {
      this.currIndex = this.slides.length - 2;
      this.nextIndex = this.slides.length - 1;
    }
  }

  private updateStyles(): void {
    const nextBackground = this.slides[this.nextIndex].background;
    const currBackground = this.slides[this.currIndex].background;

    this.currBackgroundStyle = `url(assets/images/${currBackground})`;
    this.nextBackgroundStyle = `url(assets/images/${nextBackground})`;
    this.clipStyle = this.domSanitizer.bypassSecurityTrustStyle(`circle(${this.clip}% at 50% 50%)`);
  }

}
