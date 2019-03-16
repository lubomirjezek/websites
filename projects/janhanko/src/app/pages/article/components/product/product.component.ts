import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Product } from '../../../../models/product';
import { ProductParam } from '../../../../models/product-param';

@Component({
  selector: 'janhanko-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {

  @Input() product: Product;

  sizes: string[] = [];
  selectedSize: string;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('product') && changes.product.isFirstChange()) {
      this.product.available_params
        .forEach((param: ProductParam) => {
          if (param.name === 'Velikost') {
            this.sizes.push(param.value);
          }
        });
    }
  }

}
