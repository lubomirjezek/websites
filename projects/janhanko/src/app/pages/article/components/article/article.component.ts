import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { delay, map, switchMap, takeUntil, tap } from 'rxjs/operators';

import { ArticleService } from '../../services/article.service';
import { Article } from '../../../../models/article';
import { animate, style, transition, trigger } from '@angular/animations';
import { Product } from '../../../../models/product';

@Component({
  selector: 'janhanko-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('100ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ArticleComponent implements OnInit, OnDestroy {

  @HostBinding('style.background-image') image: string;

  destroy: Subject<null> = new Subject<null>();
  article: Article;
  products: Product[];
  loading: boolean;

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected articleService: ArticleService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        tap(() => this.loading = true),
        takeUntil(this.destroy),
        map((params: Params) => params.article),
        switchMap((name: string) => this.articleService.getArticle(name)),
        tap((article: Article) => this.image = `url('${article.image}')`),
        delay(100)
      )
      .subscribe((article: Article) => {
        this.article = article;
        this.loading = false;
      });
  }

  ngOnDestroy() {
    this.destroy.next();
  }

}
