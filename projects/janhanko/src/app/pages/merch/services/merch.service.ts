import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from '../../../models/product';
import { BaseService } from '../../../base.service';

@Injectable({
  providedIn: 'root'
})
export class MerchService extends BaseService {

  public getProducts(): Observable<Product[]> {
    const endpoint = this.buildUrl(['products']);

    return this.get(endpoint);
  }

}
