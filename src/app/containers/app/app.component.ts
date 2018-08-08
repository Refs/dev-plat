import { Component , OnInit } from '@angular/core';

import * as fromServices from '../../services';

import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private topServices: fromServices.TopNavItemsService,
    private store: Store<fromStore.RootState>
  ) {}

  ngOnInit () {
    // this.topServices.getTopNavItems()
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
    this.store.dispatch(new fromStore.LoadLeftMenus() );
  }
}
