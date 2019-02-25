import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescListComponent } from './components/desc-list/desc-list.component';
import { DescListTermComponent } from './components/desc-list-term/desc-list-term.component';
import { DescListDataComponent } from './components/desc-list-data/desc-list-data.component';

@NgModule({
  declarations: [
    DescListComponent,
    DescListTermComponent,
    DescListDataComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DescListComponent,
    DescListTermComponent,
    DescListDataComponent
  ],
})
export class ListModule { }
