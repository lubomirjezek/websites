import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from '../../../models/product';
import { BaseService } from '../../../base.service';
import { map } from 'rxjs/operators';

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
