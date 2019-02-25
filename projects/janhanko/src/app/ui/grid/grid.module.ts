import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RowComponent } from './components/row/row.component';
import { ColComponent } from './components/col/col.component';

@NgModule({
  declarations: [
    RowComponent,
    ColComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RowComponent,
    ColComponent
  ],
})
export class GridModule { }
