import { Component , OnInit } from '@angular/core';

import * as fromServices from '../../services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private topServices: fromServices.TopNavItemsService) {}

  ngOnInit () {
    this.topServices.getTopNavItems()
      .subscribe((data) => {
        console.log(data);
      });
  }
}
