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
  selector: 'ui-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.ui-icon]': 'true'
  }
})
export class IconComponent implements OnInit, OnChanges {
  readonly ICON_CLASS = 'ui-icon';

  @Input() color: string;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('color')) {
      ['primary', 'secondary', 'alternative']
        .forEach((color: string) => {
          this.renderer
            .removeClass(this.elRef.nativeElement, `${this.ICON_CLASS}--${color}`);
        });

      this.renderer.addClass(this.elRef.nativeElement, `${this.ICON_CLASS}--${this.color}`);
    }
  }

}
