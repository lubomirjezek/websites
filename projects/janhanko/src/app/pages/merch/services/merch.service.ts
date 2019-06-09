import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../../../models/product';
import { BaseService } from '../../../base.service';

@Injectable({
  providedIn: 'root'
})
export class MerchService extends BaseService {

  public getProducts(): Observable<Product[]> {
    const endpoint = this.buildUrl(['products']);

    return this
      .get(endpoint)
      .pipe(
        map((response: any) => response.products)
      );
  }
}
