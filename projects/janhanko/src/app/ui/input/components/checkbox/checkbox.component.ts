import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ContentChildren, forwardRef, Inject,
  Input, OnChanges, OnDestroy,
  OnInit, Optional,
  QueryList, SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

let id = 0;

@Component({
  selector: 'ui-input[type=checkbox]',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  host: {
    '[class.ui-input]': 'true',
    '[class.ui-input--checkbox]': 'true'
  }
})
export class CheckboxComponent implements OnInit, OnChanges {
  id = `ui-input--checkbox-${++id}`;

  @Input() disabled: undefined | null | boolean;
  @Input() value: any;
  @Input() checked: boolean;
  @Input() control: FormControl;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    @Optional() @Inject(forwardRef(() => CheckboxGroupComponent)) private checkboxGroup: CheckboxGroupComponent
  ) { }

  ngOnInit() {
    this.updateChecked();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('checked')) {
      this.changeDetectorRef.markForCheck();
    }
  }

  onClick(): void {
    if (!this.isDisabled()) {
      this.checked = !this.checked;

      if (this.control) {
        this.control.markAsDirty();
        this.control.markAsTouched();
        this.control.setValue(this.checked);
      }

      if (this.checkboxGroup) {
        this.checkboxGroup.markAsDirty();
        this.checkboxGroup.markAsTouched();
        this.checkboxGroup.value = this.value;
      }
    }

    console.log(this.checked);
  }

  isDisabled(): boolean {
    return !this.disabled && typeof this.disabled !== 'undefined' || this.disabled === true;
  }

  updateChecked(): void {
    if (this.checkboxGroup) {
      if (Array.isArray(this.checkboxGroup.value)) {
        this.checked = this.checkboxGroup
          .value
          .indexOf(this.value) !== -1;
      } else {
        this.checked = this.checkboxGroup.value === this.value;
      }
    } else if (this.control) {
      this.checked = this.control.value === this.value;
    }
  }
}

@Component({
  selector: 'ui-checkbox-group',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  host: {
    '[class.ui-checkbox-group]': 'true'
  }
})
export class CheckboxGroupComponent implements OnInit, OnDestroy, OnChanges {
  destroy: Subject<null> = new Subject<null>();

  @ContentChildren(CheckboxComponent, { descendants: true }) checkboxes: QueryList<CheckboxComponent>;

  @Input() control: FormControl;


  set value(value: any) {
    if (!Array.isArray(this.control.value) || this.control.value.length === 0) {
      this.control.setValue([value]);
      return;
    }

    const filtered = this.control.value.filter(_value => _value !== value);

    if (this.control.value.length === filtered.length) {
      this.control.setValue(this.control.value.concat(value));
    } else {
      this.control.setValue(filtered);
    }
  }

  get value(): any {
    return this.control.value;
  }

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('control')) {
      this.control.valueChanges
        .pipe(
          takeUntil(this.destroy)
        )
        .subscribe(() => this.checkboxes.forEach(checkbox => checkbox.updateChecked()));
    }
  }

  ngOnDestroy() {
    this.destroy.next();
  }


  markAsDirty(): void {
    this.control.markAsDirty();
  }

  markAsTouched(): void {
    this.control.markAsTouched();
  }
}

