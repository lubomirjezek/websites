import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MerchComponent } from './components/merch/merch.component';

const routes: Routes = [
  {
    path: '',
    component: MerchComponent
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
export class MerchRoutingModule { }
