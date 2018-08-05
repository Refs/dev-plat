import { Component , OnInit } from '@angular/core';

// import 'jquery-modal';

// import 'jquery-modal/jquery.modal.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor() {}

  ngOnInit() {
    $('#btn').on('click', ( event ) => {
      $('#login-form').modal();
    });
  }
}
