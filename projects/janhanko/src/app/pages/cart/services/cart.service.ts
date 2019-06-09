import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../../../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor() { }

  public addToCart(product: Product): void {
    const products = this.cart.getValue();

    this.cart.next(products.concat(product));
  }
}
