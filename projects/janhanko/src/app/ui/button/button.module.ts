import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { BorderButtonComponent } from './components/border-button/border-button.component';

@NgModule({
  declarations: [
    ButtonComponent,
    BorderButtonComponent,
    IconButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    BorderButtonComponent,
    IconButtonComponent
  ]
})
export class ButtonModule { }
