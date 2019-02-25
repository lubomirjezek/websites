import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';

import { RootComponent } from './components/root/root.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LogoComponent } from './components/logo/logo.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    RootComponent,
    NavigationComponent,
    LogoComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    OverlayModule
  ],
  exports: [
    RootComponent
  ],
  entryComponents: [
    SidenavComponent
  ]
})
export class HeaderModule { }
