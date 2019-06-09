import { Component, Input, OnInit } from '@angular/core';
import { NavigationLink } from '../../../../models/navigation-link';
import { CartService } from '../../../../pages/cart/services/cart.service';
import { Product } from '../../../../models/product';

@Component({
  selector: 'janhanko-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() navigation: NavigationLink[];

  productCount: number = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartService.cart
      .subscribe((products: Product[]) => {
        this.productCount = products.length;
      });
  }

}
