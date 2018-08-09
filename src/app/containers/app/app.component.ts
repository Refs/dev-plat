import { Component , OnInit } from '@angular/core';

import * as fromServices from '../../services';

import { Store, select } from '@ngrx/store';

import * as fromStore from '../../store';

import { Observable } from 'rxjs/Observable';
import { tap } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  pizza$: Observable<any>;

  constructor(
    private topServices: fromServices.TopNavItemsService,
    private store: Store<fromStore.RootState>
  ) {
    this.store.dispatch(new fromStore.LoadLeftMenus() );
  }

  ngOnInit () {
    this.pizza$ = this.store.pipe(
      select(fromStore.getSelectedLeftMenusEntities),
      tap((data) => {
        console.log(data);
      })
    );
  }
}
