import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootComponent } from './components/root/root.component';
import { ArticleRoutingModule } from './article-routing.module';
import { HeaderModule } from '../../layout/header/header.module';
import { ButtonModule } from '../../ui/button/button.module';
import { FooterModule } from '../../layout/footer/footer.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    HeaderModule,
    ButtonModule,
    FooterModule
  ]
})
export class ArticleModule { }
