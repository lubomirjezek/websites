import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, interval, Subject } from 'rxjs';
import { filter, takeUntil, throttleTime } from 'rxjs/operators';
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
      title: 'Můj merch',
      background: 'muj-merch.jpg'
    }, {
      title: 'Youtube',
      background: 'youtube.jpg'
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
  currentSlideIndex = 0;
  currentClip = 100 - this.STEP_SIZE;

  clipStyle;
  backgroundStyle;

  constructor(
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.updateStyles();

    fromEvent(window, 'wheel')
      .pipe(
        filter((event: WheelEvent) => event.deltaY > 0),
        throttleTime(30)
      )
      .subscribe(() => {
        this.recalculateClip();

        if (this.currentClip === 0) {
          this.recalculateSlide();
        }

        this.updateStyles();
      });
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  private recalculateClip(): void {
    this.currentClip = (this.currentClip + this.STEP_SIZE) % 100;
  }

  private recalculateSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  private updateStyles(): void {
    const background = this.slides[this.currentSlideIndex].background;

    this.backgroundStyle = `url(assets/images/${background})`;
    this.clipStyle = this.domSanitizer.bypassSecurityTrustStyle(`circle(${this.currentClip}% at 50% 50%)`);
  }

}
