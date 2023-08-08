import { ActionReducerMap } from '@ngrx/store';
import * as fromShoppingList from './shopping-list/store/shopping-list.reducers';
import * as fromAuth from './authentication/store/auth.reducers';

export const rootReducer = {};

export interface AppState {
  shoppingList: fromShoppingList.State;
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState, any> = {
  shoppingList: fromShoppingList.shoppingListReducer,
  auth: fromAuth.authReducer,
};
