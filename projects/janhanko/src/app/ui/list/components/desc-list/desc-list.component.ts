import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-dl',
  templateUrl: './desc-list.component.html',
  styleUrls: ['./desc-list.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.ui-dl]': 'true'
  }
})
export class DescListComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
