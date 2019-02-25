import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'ui-modal-content'
})
export class ModalContentDirective {
  @HostBinding('class.ui-modal__content') cssClass = true;

  constructor() { }

}
