import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'a[ui-border-button], button[ui-border-button], label[ui-border-button]',
  templateUrl: './border-button.component.html',
  styleUrls: ['./border-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.ui-border-button]': 'true'
  }
})
export class BorderButtonComponent implements OnInit, OnChanges {
  readonly BUTTON_CLASS = 'ui-border-button';

  @Input('ui-border-button') set uiBorderButton(value: string) {
    this.color = value;
  }

  @Input() color: string;

  @Input() set disabled(value: boolean) {
    if (value) {
      this.renderer.addClass(this.elRef.nativeElement, `ui-border-button--disabled`);
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, `ui-border-button--disabled`);
    }
  }

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('color') || changes.hasOwnProperty('uiBorderButton')) {
      ['neutral', 'positive', 'negative']
        .forEach((color: string) => {
          this.renderer
            .removeClass(this.elRef.nativeElement, `${this.BUTTON_CLASS}--${color}`);
        });

      this.renderer.addClass(this.elRef.nativeElement, `${this.BUTTON_CLASS}--${this.color}`);
    }
  }

}
