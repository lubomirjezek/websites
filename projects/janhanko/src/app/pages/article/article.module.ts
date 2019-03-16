import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootComponent } from './components/root/root.component';
import { ArticleRoutingModule } from './article-routing.module';
import { HeaderModule } from '../../layout/header/header.module';
import { ButtonModule } from '../../ui/button/button.module';
import { FooterModule } from '../../layout/footer/footer.module';
import { ProductComponent } from './components/product/product.component';
import { GridModule } from '../../ui/grid/grid.module';

@NgModule({
  declarations: [
    RootComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    HeaderModule,
    ButtonModule,
    FooterModule,
    GridModule
  ]
})
export class ArticleModule { }
