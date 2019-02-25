import { ChangeDetectionStrategy, Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'ui-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('scale', [
      state('in', style({ opacity: 1, transform: 'scaleY(1)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'scaleY(0)' }),
        animate(`225ms cubic-bezier(0.4,0.0,1,1)`)
      ]),
      transition(':leave', [
        style({ opacity: 0, transform: 'scaleY(0)' }),
        animate(`225ms cubic-bezier(0.0,0.0,0.2,1)`)
      ])
    ])
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  host: {
    '[class.ui-modal]': 'true'
  }
})
export class ModalComponent implements OnInit {
  @HostBinding('@scale') doAnimate = true;

  constructor() { }

  ngOnInit() { }

}
