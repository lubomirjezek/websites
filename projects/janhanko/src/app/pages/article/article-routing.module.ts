import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ArticleComponent } from './components/article/article.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleComponent
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
export class ArticleRoutingModule { }
