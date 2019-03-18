import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'janhanko-cart',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  form: FormGroup = new FormGroup({
    test: new FormControl()
  });

  constructor() { }

  ngOnInit() { }

}
