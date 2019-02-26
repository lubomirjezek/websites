import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootComponent } from './components/root/root.component';
import { GridModule } from '../../ui/grid/grid.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    GridModule
  ],
  exports: [
    RootComponent
  ]
})
export class FooterModule { }
