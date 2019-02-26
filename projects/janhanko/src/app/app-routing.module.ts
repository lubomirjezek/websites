import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/homepage/homepage.module#HomepageModule'
  }, {
    path: ':article',
    loadChildren: './pages/article/article.module#ArticleModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false
    }),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
