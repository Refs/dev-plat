import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

// import storeModule
import { StoreModule, MetaReducer, ReducerObservable } from '@ngrx/store';
// import router store module
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
// import store devtools module
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



// import ngx-store-freeze
import { storeFreeze } from 'ngrx-store-freeze';
// import angular-cli environments
import { environment } from '../environments/environment';


// import containers
import * as fromContainers from './containers';
// import components
import * as fromComponents from './components';
// import services
import * as fromServices from './services';

// import appModule reducers
import { reducers, CustomSerializer } from './store';


export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

@NgModule({
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AppMaterialModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreRouterConnectingModule,
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ],
  providers: [
    ...fromServices.services,
    { provide: RouterStateSerializer, useClass: CustomSerializer}
  ],
  bootstrap: [fromContainers.AppComponent]
})
export class AppModule { }
