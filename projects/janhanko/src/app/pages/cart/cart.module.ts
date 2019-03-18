import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootComponent } from './components/root/root.component';
import { CartRoutingModule } from './cart-routing.module';
import { HeaderModule } from '../../layout/header/header.module';
import { FooterModule } from '../../layout/footer/footer.module';
import { SocialMediaModule } from '../../layout/social-media/social-media.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    HeaderModule,
    FooterModule,
    SocialMediaModule
  ]
})
export class CartModule { }
