
import * as fromModels from '../../models';

import * as fromActions from '../actions';

export interface LeftMenusState {
  entities: {[id: number]: fromModels.TopNavItem};
  loaded: boolean;
  loading: boolean;
  selectedSideMenu: fromModels.SideNavMenu | null;
}


export const initialState: LeftMenusState = {
  entities: [],
  loaded: false,
  loading: false,
  selectedSideMenu: null
};

export function reducer(
  state = initialState,
  action: fromActions.LeftMenusAction
): LeftMenusState {
  switch (action.type) {
    case fromActions.LeftMenusActionType.LOAD_LEFT_MENUS:
      {
        return {
          ...state,
          loading: true
        };
      }

    case fromActions.LeftMenusActionType.LOAD_LEFT_MENUS_SUCCESS:
      {
        return {
          ...state,
          entities: action.payload
        };
      }
  }
}





