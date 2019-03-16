import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootComponent } from './components/root/root.component';
import { GridModule } from '../../ui/grid/grid.module';
import { IconModule } from '../../ui/icon/icon.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    IconModule
  ],
  exports: [
    RootComponent
  ]
})
export class FooterModule { }
