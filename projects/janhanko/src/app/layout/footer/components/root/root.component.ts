import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'janhanko-footer',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  @Input() mode: 'normal' | 'fixed' = 'normal';

  constructor() { }

  ngOnInit() { }

}
