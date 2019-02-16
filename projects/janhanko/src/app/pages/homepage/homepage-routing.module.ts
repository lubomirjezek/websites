import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RootComponent } from './components/root/root.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class HomepageRoutingModule { }
