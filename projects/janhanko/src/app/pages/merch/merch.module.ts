import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from '../../layout/header/header.module';
import { ButtonModule } from '../../ui/button/button.module';
import { FooterModule } from '../../layout/footer/footer.module';
import { ProductComponent } from './components/product/product.component';
import { GridModule } from '../../ui/grid/grid.module';
import { SocialMediaModule } from '../../layout/social-media/social-media.module';
import { MerchComponent } from './components/merch/merch.component';
import { MerchRoutingModule } from './merch-routing.module';
import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [
    ProductComponent,
    MerchComponent
  ],
  imports: [
    CommonModule,
    MerchRoutingModule,
    HeaderModule,
    ButtonModule,
    FooterModule,
    GridModule,
    SocialMediaModule,
    CartModule
  ]
})
export class MerchModule { }
