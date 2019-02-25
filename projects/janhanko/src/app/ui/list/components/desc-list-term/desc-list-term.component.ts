import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-dt',
  templateUrl: './desc-list-term.component.html',
  styleUrls: ['./desc-list-term.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.ui-dt]': 'true'
  }
})
export class DescListTermComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
