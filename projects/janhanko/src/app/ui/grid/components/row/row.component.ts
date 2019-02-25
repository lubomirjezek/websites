import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.ui-row]': 'true'
  }
})
export class RowComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
