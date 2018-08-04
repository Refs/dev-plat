import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';


import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';

import { RouterStateUrl } from '../../models/router.model';


export interface RootState {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<RootState> = {
  routerReducer: fromRouter.routerReducer
};

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('routerReducer');

export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;

    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;

    while ( state.firstChild ) {
      state = state.firstChild;
    }

    const { params } = state;

    return { url, queryParams, params };
  }
}

