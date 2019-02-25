import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'ui-modal-actions'
})
export class ModalActionsDirective {
  @HostBinding('class.ui-modal__actions') cssClass = true;

  constructor() { }

}
