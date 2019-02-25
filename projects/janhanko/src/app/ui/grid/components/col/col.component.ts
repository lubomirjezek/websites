import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.ui-col]': 'true'
  }
})
export class ColComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
