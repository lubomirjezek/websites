import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalService } from './services/modal.service';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { ModalComponent } from './components/modal/modal.component';
import { ModalContentDirective } from './directives/modal-content.directive';
import { ModalActionsDirective } from './directives/modal-actions.directive';

@NgModule({
  declarations: [
    ModalComponent,
    ModalContentDirective,
    ModalActionsDirective
  ],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule
  ],
  exports: [
    ModalComponent,
    ModalContentDirective,
    ModalActionsDirective
  ],
  providers: [
    ModalService
  ]
})
export class ModalModule { }
