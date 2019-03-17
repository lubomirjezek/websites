import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaBarComponent } from './components/social-media-bar/social-media-bar.component';
import { ButtonModule } from '../../ui/button/button.module';
import { IconModule } from '../../ui/icon/icon.module';

@NgModule({
  declarations: [
    SocialMediaBarComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    IconModule
  ],
  exports: [
    SocialMediaBarComponent
  ]
})
export class SocialMediaModule { }
