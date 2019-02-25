import { Component, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'ui-input[type=text], ui-input[type=password], ui-input[type=textarea]',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  host: {
    '[class.ui-input]': 'true',
    '[class.ui-input--text]': 'true'
  }
})
export class TextComponent implements OnInit {

  @Input() type: string;
  @Input() control: FormControl;
  @Input() placeholder: string | TemplateRef<any>;
  @Input() additionalPlaceholder: string;
  @Input() realPlaceholder = '';
  @Input() errors: string | ValidationErrors;

  isFocused: boolean;

  constructor() { }

  ngOnInit() { }

  hasPlaceholder (): boolean {
    return !!this.placeholder;
  }

  hasAdditionalPlaceholder (): boolean {
    return !!this.additionalPlaceholder;
  }

  hasErrors(): boolean {
    return this.control.dirty && this.control.invalid;
  }

  onFocus(): void {
    this.isFocused = true;
  }

  onBlur(): void {
    this.isFocused = false;
  }

  getFirstValidatorError(): string {
    if (typeof this.errors === 'string') {
      return this.errors;
    }

    const keys = Object.keys(this.control.errors);

    return this.errors && this.errors.hasOwnProperty(keys[0]) ? this.errors[keys[0]] : '';
  }

  isPlaceholderText(): boolean {
    return typeof this.placeholder === 'string';
  }
}
