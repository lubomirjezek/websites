import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Product } from '../../../../models/product';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'janhanko-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {

  @Input() product: Product;

  sizes: string[] = [];
  selectedSize: string;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
/*    if (changes.hasOwnProperty('product') && changes.product.isFirstChange()) {
      this.product.available_params
        .forEach((param: ProductParam) => {
          if (param.name === 'Velikost') {
            this.sizes.push(param.value);
          }
        });
    }*/
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
