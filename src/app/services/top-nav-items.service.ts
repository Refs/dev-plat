import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/observable';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { of } from 'rxjs/observable/of';

import * as fromModels from '../models';



@Injectable()
export class TopNavItemsService {

  constructor( private http: HttpClient ) { }

  getTopNavItems(): Observable<fromModels.TopNavItem> {
    const customHeaders: HttpHeaders = new HttpHeaders();
    customHeaders.append('Cookie', 'JSESSIONID=93E66FB2735236137EA3DC16D6CD839F; td_cookie=3320564747');
    return this.http
      .get<fromModels.TopNavItem>('http://218.22.29.213:8296/deviceplatform/getLeftMenu.do', { headers: customHeaders })
      .pipe(
        tap((data) => {
          console.log(data);
        }),
        catchError(error => of(error)
      ));
  }

}
