import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TextComponent } from './components/text/text.component';
import { CheckboxComponent, CheckboxGroupComponent } from './components/checkbox/checkbox.component';

@NgModule({
  declarations: [
    TextComponent,
    CheckboxComponent,
    CheckboxGroupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TextComponent,
    CheckboxComponent,
    CheckboxGroupComponent
  ]
})
export class InputModule { }
