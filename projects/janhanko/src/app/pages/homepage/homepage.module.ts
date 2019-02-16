import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootComponent } from './components/root/root.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HeaderModule } from '../../layout/header/header.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    HeaderModule
  ]
})
export class HomepageModule { }
