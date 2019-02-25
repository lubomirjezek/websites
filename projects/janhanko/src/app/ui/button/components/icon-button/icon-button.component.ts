import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'a[ui-icon-button], button[ui-icon-button], label[ui-icon-button]',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.ui-icon-button]': 'true'
  }
})
export class IconButtonComponent implements OnInit {

  @Input() set disabled(value: boolean) {
    if (value) {
      this.renderer.addClass(this.elRef.nativeElement, `ui-icon-button--disabled`);
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, `ui-icon-button--disabled`);
    }
  }

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {}

}
