import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { TooltipDirective } from './directives/tooltip.directive';

@NgModule({
  declarations: [
    TooltipDirective
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [
    TooltipDirective
  ]
})
export class TooltipModule { }
