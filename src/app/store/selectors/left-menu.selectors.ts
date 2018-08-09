import { createSelector } from '@ngrx/store';

import * as fromReducers from '../reducers';

import * as fromLeftMenus from '../reducers/leftMenus.reducer';

export const getLeftMenus = createSelector(
  fromReducers.getLeftMenusState,
  fromLeftMenus.getLeftMenusEntities,
);


export const getSelectedLeftMenusEntities = createSelector(
  fromReducers.getRouterState,
  getLeftMenus,
  (router, entities) => {
    if (router && entities) {
      return router && entities[395].childs;
    }
  }
);




