import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RootComponent } from './components/root/root.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    RootComponent,
    NavigationComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RootComponent
  ],
})
export class HeaderModule { }
