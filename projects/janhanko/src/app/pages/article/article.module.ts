import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootComponent } from './components/root/root.component';
import { ArticleRoutingModule } from './article-routing.module';
import { HeaderModule } from '../../layout/header/header.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    HeaderModule
  ]
})
export class ArticleModule { }
