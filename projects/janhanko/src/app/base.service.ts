import { Inject } from '@angular/core';
import { API_URL } from './app.config';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class BaseService {
  protected constructor(
    @Inject(API_URL) private apiUrl: string,
    protected http: HttpClient
  ) { }

  private processGetParams(get: Object): string {
    const parts = [];

    Object.keys(get).forEach((prop) => {
      const val = get[prop];
      if (val) {
        if (val instanceof Array) {
          const string = val.reduce((sum, value) => {
            sum.push(`${prop}[]=` + encodeURI(value));
            return sum;
          }, []);
          parts.push(string.join('&'));
        } else {
          parts.push(`${prop}=` + encodeURI(get[prop]));
        }
      }
    });

    return parts.length ? '?' + parts.join('&') : '';
  }

  private buildPath(path: string | string[]): string {
    return typeof path === 'string' ? path : path.join('/');
  }

  protected buildUrl(path: string | string[], params: { [key: string]: any} = {}): string {
    return this.apiUrl + this.buildPath(path) + this.processGetParams(params);
  }

  protected get<T>(url: string, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {
    return this.http.get<T>(url, options);
  }

}
