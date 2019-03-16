import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { of, Subject } from 'rxjs';
import { delay, map, switchMap, takeUntil, tap } from 'rxjs/operators';

import { DataService } from '../../services/data.service';
import { Article } from '../../../../models/article';
import { animate, style, transition, trigger } from '@angular/animations';
import { Product } from '../../../../models/product';

@Component({
  selector: 'janhanko-article',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
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
export class RootComponent implements OnInit, OnDestroy {

  @HostBinding('style.background-image') image: string;

  destroy: Subject<null> = new Subject<null>();
  article: Article;
  products: Product[];
  loading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        tap(() => this.loading = true),
        takeUntil(this.destroy),
        map((params: Params) => params.article),
        switchMap((name: string) => this.dataService.getArticle(name)),
        tap((article: Article) => this.image = `url('${article.image}')`),
        delay(100)
      )
      .subscribe((article: Article) => {
        this.article = article;
        this.loading = false;
      });

    this.dataService.getProducts()
      .subscribe((products: Product[]) => this.products = products);
  }

  ngOnDestroy() {
    this.destroy.next();
  }

}
