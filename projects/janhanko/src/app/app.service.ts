import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  public getArticleImages(): Observable<string[]> {
    return of([
      '../../../../../assets/images/yt.png',
      '../../../../../assets/images/merch.png',
      '../../../../../assets/images/uss.png',
      '../../../../../assets/images/usa.png',
      '../../../../../assets/images/susp.png',
      '../../../../../assets/images/susp.png'
    ]);
  }
}
