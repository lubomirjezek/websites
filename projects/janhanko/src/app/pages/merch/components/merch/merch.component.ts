import { Component, OnInit } from '@angular/core';

import { ArticleComponent } from '../../../article/components/article/article.component';
import { Product } from '../../../../models/product';
import { delay, tap } from 'rxjs/operators';
import { Article } from '../../../../models/article';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../article/services/article.service';
import { MerchService } from '../../services/merch.service';

@Component({
  selector: 'janhanko-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['../../../article/components/article/article.component.scss']
})
export class MerchComponent extends ArticleComponent implements OnInit {

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected articleService: ArticleService,
    private merchService: MerchService
  ) {
    super(activatedRoute, articleService);
  }

  ngOnInit() {
    this.loading = true;
    this.articleService.getArticle('muj-merch')
      .pipe(
        tap((article: Article) => this.image = `url('${article.image}')`),
        delay(100)
      )
      .subscribe((article: Article) => {
        this.article = article;
        this.loading = false;
      });

    this.merchService.getProducts()
      .subscribe((products: Product[]) => this.products = products);
  }

}
