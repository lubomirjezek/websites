import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-dd',
  templateUrl: './desc-list-data.component.html',
  styleUrls: ['./desc-list-data.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.ui-dd]': 'true'
  }
})
export class DescListDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
