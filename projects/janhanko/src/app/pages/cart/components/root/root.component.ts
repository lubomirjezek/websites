import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'janhanko-cart',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit, OnDestroy {
  destroy: Subject<null> = new Subject<null>();
  form: FormGroup = new FormGroup({
    test: new FormControl()
  });
  addressCopy: FormControl = new FormControl(false);

  constructor() { }

  ngOnInit() {
    this.addressCopy.valueChanges
      .pipe(
        takeUntil(this.destroy)
      )
      .subscribe((value: boolean) => {
        if (value) {
          this.copyDeliveryAddress();
        } else {
          this.resetDeliveryAddress();
        }
      });
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  private copyDeliveryAddress(): void { }

  private resetDeliveryAddress(): void { }

}
