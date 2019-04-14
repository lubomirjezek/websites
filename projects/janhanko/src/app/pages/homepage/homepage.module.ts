import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageComponent } from './components/homepage/homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HeaderModule } from '../../layout/header/header.module';
import { FooterModule } from '../../layout/footer/footer.module';
import { SocialMediaModule } from '../../layout/social-media/social-media.module';

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    HeaderModule,
    FooterModule,
    SocialMediaModule
  ]
})
export class HomepageModule { }
