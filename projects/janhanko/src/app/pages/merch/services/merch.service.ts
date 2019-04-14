import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from '../../../models/product';

@Injectable({
  providedIn: 'root'
})
export class MerchService {

  constructor() { }

  public getProducts(): Observable<Product[]> {
    return of([]);
  }

}
