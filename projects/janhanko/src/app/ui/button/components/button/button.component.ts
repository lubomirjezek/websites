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
  selector: 'a[ui-button], button[ui-button], label[ui-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.ui-button]': 'true'
  }
})
export class ButtonComponent implements OnInit, OnChanges {
  readonly BUTTON_CLASS = 'ui-button';

  @Input('ui-button') set uiButton(value: string) {
    this.color = value;
  }

  @Input() color: string;

  @Input() set disabled(value: boolean) {
    if (value) {
      this.renderer.addClass(this.elRef.nativeElement, `ui-button--disabled`);
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, `ui-button--disabled`);
    }
  }

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('color') || changes.hasOwnProperty('uiButton')) {
      ['neutral', 'positive', 'negative']
        .forEach((color: string) => {
          this.renderer
            .removeClass(this.elRef.nativeElement, `${this.BUTTON_CLASS}--${color}`);
        });

      this.renderer.addClass(this.elRef.nativeElement, `${this.BUTTON_CLASS}--${this.color}`);
    }
  }

}
